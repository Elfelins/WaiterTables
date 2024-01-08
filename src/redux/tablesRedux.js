import { API_URL } from "../config.js";

export const getAllTables = state => state.tables;
export const getTableById = (state, tableId) => state.tables.find((table) => table.id === tableId);

const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const EDIT_TABLE = createActionName("EDIT_TABLE");

export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(response => response.json())
      .then(tables => dispatch(updateTables(tables)));
  }
};

export const editTableRequest = (thisTable) => {
  return (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thisTable),
    };
    fetch(`${API_URL}/tables/${thisTable.id}`, options).then(() =>
      dispatch(editTable(thisTable))
    );
  };
};

const tablesReducer = (statePart = { tables: [] }, action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return { ...statePart, tables: action.payload};
      case EDIT_TABLE:
        return {
          ...statePart,
          tables: statePart.tables.map((table) =>
            table.id === action.payload.id ? { ...table, ...action.payload } : table
          ),
        };
    default:
      return statePart;
  };
};

export default tablesReducer;