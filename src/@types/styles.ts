import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants, RuntimeFn } from "@vanilla-extract/recipes";

export type ExtractVariants<
  T extends RuntimeFn<Record<string, Record<string, ComplexStyleRule | string>>>,
> = Exclude<RecipeVariants<T>, undefined>;
