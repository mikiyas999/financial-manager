import { z } from "zod";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertCategorySchema } from "@/db/schema";

import { CategoryForm } from "./CategoryForm";
import { useNewCategory } from "../hooks/use-new-category";
import { useCreateCategory } from "../api/use-create-category";

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.infer<typeof formSchema>;

export const NewCategorySheet = () => {
  const { isOpen, onClose } = useNewCategory();
  const mutation = useCreateCategory();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen || mutation.isPending} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>

          <SheetDescription>
            Create a new Category in your organization.
          </SheetDescription>
        </SheetHeader>

        <CategoryForm
          defaultValues={{
            name: "",
          }}
          onSubmit={onSubmit}
          disabled={mutation.isPending}
        />
      </SheetContent>
    </Sheet>
  );
};
