export interface pagination {
    page?: number;
    limit?: number;
    catId?: number;
}
export interface categoryModel {
    id?: number;
    name?: string;
    image?: string;
}
export interface getFoodModel {
    catId?: number;
}