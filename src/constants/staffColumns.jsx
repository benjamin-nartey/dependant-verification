import { format } from "date-fns";

import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "staffName",
    header: "STAFF NAME",
  },
  {
    accessorKey: "sex",
    header: "SEX",
  },
  {
    accessorKey: "position",
    header: "POSITION",
  },
  {
    accessorKey: "department",
    header: "DEPARTMENT",
  },
  {
    accessorKey: "phone",
    header: "CONTACT",
  },

  columnHelper.accessor("timestamp", {
    cell: (info) => (
      <>{format(new Date(info.getValue()), "dd MMM yyyy HH:mm:ss")}</>
    ),
    header: "TIME OF VISIT",
  }),
];
