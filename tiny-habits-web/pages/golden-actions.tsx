import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AspirationInputPage from '@components/golden-actions/pages/AspirationInputPage';

type ActionInput = {
  name: string;
  isEffective: boolean;
  isEasy: boolean;
};

type GoldenActionInputs = {
  aspiration: string;
  actions: ActionInput[];
};

const GoldenActionsPage = (): JSX.Element => {
  const handlers = useForm<GoldenActionInputs>();

  return (
    <FormProvider {...handlers}>
      <AspirationInputPage />
    </FormProvider>
  );
};

export default GoldenActionsPage;
