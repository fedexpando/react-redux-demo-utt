import { reducer, initialState } from "./reducer";
import { NAME } from "./constants";
import * as actions from "./actions";
import * as selectors from "./selectors";

export default { NAME, reducer, initialState, actions, selectors };