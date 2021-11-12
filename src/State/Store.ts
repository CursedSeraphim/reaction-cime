import { RootState } from "projection-space-explorer";
import { combineReducers } from "redux";
import aggregateDataset from "./AggregateDatasetDuck";
import lineUpInput from "./LineUpInputDuck";

export const CIMEReducers = {
  lineUpInput: lineUpInput,
  // aggregateDataset: aggregateDataset
};

const combined = combineReducers(CIMEReducers);

/**
 * Cime typings...
 */
export type CimeState = ReturnType<typeof combined>;

export type AppState = RootState & CimeState;
