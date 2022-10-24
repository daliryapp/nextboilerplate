export interface orderType {
    foodId?: number;
    foodName?: string;
    foodPrice?: number;
    foodDiscount?: number;
    foodDetails?: string[];
    count?: number;
    image?: string;
}
export interface categoryType {
    catId?: number;
}
export interface templateType {
    openDrawer?: boolean;
}