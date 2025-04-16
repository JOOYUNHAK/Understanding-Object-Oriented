export interface DiscountCondition {
  isSatisfiedBy(screening: any): boolean;
}
