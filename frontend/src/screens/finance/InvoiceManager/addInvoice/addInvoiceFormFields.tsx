import { DateThanToday } from "@features/validators/DateValidtors";

const AddInvoiceBuilder = () => {
  const AddInvoiceForm = [
    {
      label: "Invoice No",
      name: "invoice_number",
      rules: [{ required: true, message: "Please enter Invoice Number" }],
    },
    {
      label: "Invoice Date",
      name: "invoice_date",
      rules: [
        { required: true, message: "Please enter Invoice Date" },
        { validator: DateThanToday },
      ],
      inputType: "date",
    },

    {
      label: "City",
      name: "city",
      rules: [{ required: true, message: "Please enter city" }],
      inputType: "select",
      selectOptions: ["Bengaluru"],
    },
    {
      label: "Service Type",
      name: "service_type",
      rules: [{ required: true, message: "Please enter Service Type" }],
      inputType: "select",
      selectOptions: ["Transport", "Warehouse"],
    },
    {
      label: "Service Month",
      name: "service_month",
      rules: [{ required: true, message: "Please enter Service Month" }],
    },
    {
      label: "Taxable Value",
      name: "taxable_value",
      rules: [{ required: true, message: "Please enter Taxable Value" }],
    },
    {
      label: "IGST",
      name: "igst",
      rules: [{ required: true, message: "Please enter IGST value" }],
    },
    {
      label: "SGST",
      name: "sgst",
      rules: [{ required: true, message: "Please enter SGST value" }],
    },
    {
      label: "CGST",
      name: "cgst",
      rules: [{ required: true, message: "Please enter CGST value" }],
    },
    {
      label: "Invoice Value",
      name: "invoice value",
      rules: [{ required: true, message: "Please enter Invoice value" }],
    },
    {
      label: "Status",
      name: "status",
      rules: [{ required: true, message: "Please select Status" }],
      type: "select",
      selectOptions: ["Active", "Cancelled"],
    },
    {
      label: "Replcement Invoice",
      name: "replacement_invoice",
      rules: [
        { required: true, message: "Please enter Replacement Invoice No." },
      ],
    },
  ];
  return AddInvoiceForm;
};

export default AddInvoiceBuilder;
