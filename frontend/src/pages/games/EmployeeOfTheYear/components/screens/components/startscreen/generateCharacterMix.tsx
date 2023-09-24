import { clients } from "@pages/games/EmployeeOfTheYear/data/characters/clients";
import { vendors } from "@pages/games/EmployeeOfTheYear/data//characters/vendors";
import { employees } from "@pages/games/EmployeeOfTheYear/data/characters/employees";

const selectRandomCharacter = (characterList: any) => {
  const randomIndex = Math.floor(Math.random() * characterList.length);
  return characterList[randomIndex];
};

const generateCharacterMix = () => {
  const Characters = ["Client", "Vendor", "Employee"];
  const mixedCharacters = Characters.map((characterType) => {
    switch (characterType) {
      case "Client":
        console.log("Client");
        const randomClient = selectRandomCharacter(clients);
        return { type: "Client", ...randomClient };
      case "Vendor":
        console.log("Vendor");
        const randomVendor = selectRandomCharacter(vendors);
        return { type: "Vendor", ...randomVendor };
      case "Employee":
        console.log("Employee");
        const randomEmployee = selectRandomCharacter(employees);
        return { type: "Employee", ...randomEmployee };
      default:
        return null;
    }
  });
  return mixedCharacters;
};

export { generateCharacterMix };
