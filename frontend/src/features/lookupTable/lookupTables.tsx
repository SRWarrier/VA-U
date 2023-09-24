import getDataFromStore from "../../hooks/useDatafromStore";

interface LookupTableProps {
  lookupdata?: any;
  lookupKey: string;
  indexAsKey?: boolean;
}

const LookupTable = ({
  lookupdata,
  lookupKey,
  indexAsKey = true,
}: LookupTableProps) => {
  if (lookupdata) {
    var data = lookupdata;
  } else {
    var data = getDataFromStore(lookupKey);
  }

  const lookupTable = data.reduce((lookup: any, item: any) => {
    indexAsKey ? (lookup[item.id] = item.name) : (lookup[item.name] = item.id);
    return lookup;
  }, {});

  return lookupTable;
};

export default LookupTable;
