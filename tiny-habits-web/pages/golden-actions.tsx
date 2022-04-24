import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AspirationInputPage from '@components/golden-actions/pages/AspirationInputPage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ActionsInputPage from '@components/golden-actions/pages/ActionsInputPage';
import { GOLDEN_ACTION_STEPS } from '@constants';
import _ from 'lodash';
import SelectEffectivePage from '@components/golden-actions/pages/SelectEffectivePage';
import SelectRealisticPage from '@components/golden-actions/pages/SelectRealisticPage';
import ResultPage from '@components/golden-actions/pages/ResultPage';

const GoldenActionsPage = (): JSX.Element => {
  const router = useRouter();
  const { query } = router;
  const { step: queryStep } = query;

  const [step, setStep] = useState<GOLDEN_ACTION_STEPS>(
    GOLDEN_ACTION_STEPS.ASPIRATION_INPUT
  );

  useEffect(() => {
    if (!_.isNil(queryStep)) {
      setStep(+queryStep as GOLDEN_ACTION_STEPS);
    } else {
      setStep(GOLDEN_ACTION_STEPS.ASPIRATION_INPUT);
      router.replace('/golden-actions');
    }
  }, [queryStep]);

  const handlers = useForm<GoldenActionInputs>({
    mode: 'onChange',
    defaultValues: {
      aspiration: '',
      actions: [],
      actionTextInput: '',
    },
  });

  let innerPage: JSX.Element | null = null;

  if (step === GOLDEN_ACTION_STEPS.ASPIRATION_INPUT) {
    innerPage = <AspirationInputPage />;
  }

  if (step === GOLDEN_ACTION_STEPS.ACTIONS_INPUT) {
    innerPage = <ActionsInputPage />;
  }

  if (step === GOLDEN_ACTION_STEPS.SELECT_EFFECTIVE) {
    innerPage = <SelectEffectivePage />;
  }

  if (step === GOLDEN_ACTION_STEPS.SELECT_REALISTIC) {
    innerPage = <SelectRealisticPage />;
  }

  if (step === GOLDEN_ACTION_STEPS.RESULT_AND_SAVE) {
    innerPage = <ResultPage />;
  }

  return <FormProvider {...handlers}>{innerPage}</FormProvider>;
};

export default GoldenActionsPage;
