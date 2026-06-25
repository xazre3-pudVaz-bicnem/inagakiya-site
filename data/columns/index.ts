import { funeralBasicColumns } from "./funeral-basic";
import { familyFuneralColumns } from "./family-funeral";
import { costColumns } from "./cost";
import { kuminFuneralColumns } from "./kumin-funeral";
import { flowColumns } from "./flow";
import { mannersColumns } from "./manners";
import { consultationColumns } from "./consultation";
import { areaColumns } from "./area";

export const allColumns = [
  ...funeralBasicColumns,
  ...familyFuneralColumns,
  ...costColumns,
  ...kuminFuneralColumns,
  ...flowColumns,
  ...mannersColumns,
  ...consultationColumns,
  ...areaColumns,
];
