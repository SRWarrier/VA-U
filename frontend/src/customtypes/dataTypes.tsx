interface type_city {
  id: number;
  hub: string;
  hubshortcode: string;
  name: string;
}

interface type_hub {
  id: number;
  name: string;
  shortname: string;
}

interface type_client {
  id: number;
  name: string;
  shortname: string;
  registered_office: string;
  pan: string;
  registration_number: string;
  created_date: Date;
  modified_date: Date;
  created_by: string;
  entity_type: number;
  industry: number;
  status: number;
}

export type { type_city, type_client, type_hub };
