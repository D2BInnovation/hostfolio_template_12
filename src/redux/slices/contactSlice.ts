import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

const initialState: ContactState = {
  formData: {
    name: '',
    email: '',
    message: '',
  },
  isSubmitting: false,
  submitStatus: 'idle',
  errors: {},
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<ContactState['formData']>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setSubmitStatus: (state, action: PayloadAction<ContactState['submitStatus']>) => {
      state.submitStatus = action.payload;
    },
    setErrors: (state, action: PayloadAction<ContactState['errors']>) => {
      state.errors = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.submitStatus = 'idle';
    },
  },
});

export const { updateFormData, setSubmitting, setSubmitStatus, setErrors, resetForm } = contactSlice.actions;
export default contactSlice.reducer;