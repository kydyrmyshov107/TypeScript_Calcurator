import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
	value: number;
}

const initialState: CalculatorState = {
	value: 0,
};

export const calculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		minusValue: (state, action: PayloadAction<number>) => {
			state.value -= action.payload;
		},
		multiplyValue: (state, action: PayloadAction<number>) => {
			state.value *= action.payload;
		},
		divideValue: (state, action: PayloadAction<number>) => {
			if (action.payload !== 0) {
				state.value /= action.payload;
			}
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { add, minusValue, multiplyValue, divideValue, reset } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
