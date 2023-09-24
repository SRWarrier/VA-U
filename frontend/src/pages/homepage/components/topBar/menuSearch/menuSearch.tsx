import { useEffect, useState, useRef } from "react";
import { AutoComplete } from "antd";
import MenuSearchData, { MenuSearchDataProps } from "./menuSearchData";
import { HotKeys } from "react-hotkeys";
import { keyboardShortcuts } from "@features/keyboardShortcuts/keyBindings";
import { useNavigate } from "react-router-dom";

const MenuSearch = () => {
  const [menuItemsSearch, setMenuItemsSearch] = useState<MenuSearchDataProps[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const searchBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchItems = MenuSearchData();
    setMenuItemsSearch(searchItems);
  }, []);

  const handleSelection = (value: string) => {
    const selectedOption = menuItemsSearch.find((menu) =>
      menu.options?.some((option) => option.value === value)
    );

    if (selectedOption) {
      const selectedPath = selectedOption.options?.find(
        (option) => option.value === value
      )?.path;
      const parentPath = selectedOption.label;
      if (selectedPath) {
        const fullPath = `${parentPath}/${selectedPath}`;
        navigate(fullPath);
      }
    }
    setInputValue("");
  };

  const handleSearch = (value: string) => {
    setInputValue(value);
  };

  const handlers = {
    SELECT_MENU: (event: KeyboardEvent) => {
      event.preventDefault();
      if (searchBarRef.current) {
        searchBarRef.current.focus();
      }
    },
  };

  return (
    <HotKeys keyMap={keyboardShortcuts} handlers={handlers}>
      <AutoComplete
        ref={searchBarRef}
        popupMatchSelectWidth={200}
        style={{ width: "500px" }}
        options={menuItemsSearch.map((menu, menuIndex) => ({
          ...menu,
          options: menu.options?.map((option, optionIndex) => ({
            ...option,
            key: `option-${menuIndex}-${optionIndex}`,
          })),
        }))}
        onSelect={handleSelection}
        filterOption={(inputValue, option) =>
          option?.label?.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        }
        placeholder="Search Menu"
        value={inputValue}
        onChange={handleSearch}
      />
    </HotKeys>
  );
};

export default MenuSearch;
