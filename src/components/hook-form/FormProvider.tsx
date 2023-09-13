import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  alignItems?: string
};

export default function FormProvider({ children, onSubmit, methods, alignItems = 'center' }: Props) {
  return (
    <Form {...methods}>
      <form style={{ width: '100%', display: 'flex', alignItems, flexGrow: 1 }} onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
