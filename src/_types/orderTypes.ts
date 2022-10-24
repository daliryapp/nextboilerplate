export interface CarouselModel {
    original: string;
    blured: string;
}
export interface FoodDetail {
    id: number;
    name: string;
}
export interface FoodModel {
    name: string;
    id: number;
    categoryId: number;
    description: string;
    price: number;
    detail?: FoodDetail[];
    images?: CarouselModel[];
    discount: 0
}
export interface InfiniteModel {
    list?: FoodModel[];
    total?: number;
    count?: number;
}