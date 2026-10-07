import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FoodStockModel = runtime.Types.Result.DefaultSelection<Prisma.$FoodStockPayload>;
export type AggregateFoodStock = {
    _count: FoodStockCountAggregateOutputType | null;
    _avg: FoodStockAvgAggregateOutputType | null;
    _sum: FoodStockSumAggregateOutputType | null;
    _min: FoodStockMinAggregateOutputType | null;
    _max: FoodStockMaxAggregateOutputType | null;
};
export type FoodStockAvgAggregateOutputType = {
    totalWeightGrams: number | null;
    dailyPortionGrams: number | null;
};
export type FoodStockSumAggregateOutputType = {
    totalWeightGrams: number | null;
    dailyPortionGrams: number | null;
};
export type FoodStockMinAggregateOutputType = {
    id: string | null;
    petId: string | null;
    brandName: string | null;
    totalWeightGrams: number | null;
    dailyPortionGrams: number | null;
    purchaseDate: Date | null;
    estimatedEmptyDate: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type FoodStockMaxAggregateOutputType = {
    id: string | null;
    petId: string | null;
    brandName: string | null;
    totalWeightGrams: number | null;
    dailyPortionGrams: number | null;
    purchaseDate: Date | null;
    estimatedEmptyDate: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type FoodStockCountAggregateOutputType = {
    id: number;
    petId: number;
    brandName: number;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate: number;
    estimatedEmptyDate: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type FoodStockAvgAggregateInputType = {
    totalWeightGrams?: true;
    dailyPortionGrams?: true;
};
export type FoodStockSumAggregateInputType = {
    totalWeightGrams?: true;
    dailyPortionGrams?: true;
};
export type FoodStockMinAggregateInputType = {
    id?: true;
    petId?: true;
    brandName?: true;
    totalWeightGrams?: true;
    dailyPortionGrams?: true;
    purchaseDate?: true;
    estimatedEmptyDate?: true;
    isActive?: true;
    createdAt?: true;
};
export type FoodStockMaxAggregateInputType = {
    id?: true;
    petId?: true;
    brandName?: true;
    totalWeightGrams?: true;
    dailyPortionGrams?: true;
    purchaseDate?: true;
    estimatedEmptyDate?: true;
    isActive?: true;
    createdAt?: true;
};
export type FoodStockCountAggregateInputType = {
    id?: true;
    petId?: true;
    brandName?: true;
    totalWeightGrams?: true;
    dailyPortionGrams?: true;
    purchaseDate?: true;
    estimatedEmptyDate?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type FoodStockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodStockWhereInput;
    orderBy?: Prisma.FoodStockOrderByWithRelationInput | Prisma.FoodStockOrderByWithRelationInput[];
    cursor?: Prisma.FoodStockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FoodStockCountAggregateInputType;
    _avg?: FoodStockAvgAggregateInputType;
    _sum?: FoodStockSumAggregateInputType;
    _min?: FoodStockMinAggregateInputType;
    _max?: FoodStockMaxAggregateInputType;
};
export type GetFoodStockAggregateType<T extends FoodStockAggregateArgs> = {
    [P in keyof T & keyof AggregateFoodStock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFoodStock[P]> : Prisma.GetScalarType<T[P], AggregateFoodStock[P]>;
};
export type FoodStockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodStockWhereInput;
    orderBy?: Prisma.FoodStockOrderByWithAggregationInput | Prisma.FoodStockOrderByWithAggregationInput[];
    by: Prisma.FoodStockScalarFieldEnum[] | Prisma.FoodStockScalarFieldEnum;
    having?: Prisma.FoodStockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FoodStockCountAggregateInputType | true;
    _avg?: FoodStockAvgAggregateInputType;
    _sum?: FoodStockSumAggregateInputType;
    _min?: FoodStockMinAggregateInputType;
    _max?: FoodStockMaxAggregateInputType;
};
export type FoodStockGroupByOutputType = {
    id: string;
    petId: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate: Date;
    estimatedEmptyDate: Date;
    isActive: boolean;
    createdAt: Date;
    _count: FoodStockCountAggregateOutputType | null;
    _avg: FoodStockAvgAggregateOutputType | null;
    _sum: FoodStockSumAggregateOutputType | null;
    _min: FoodStockMinAggregateOutputType | null;
    _max: FoodStockMaxAggregateOutputType | null;
};
export type GetFoodStockGroupByPayload<T extends FoodStockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FoodStockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FoodStockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FoodStockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FoodStockGroupByOutputType[P]>;
}>>;
export type FoodStockWhereInput = {
    AND?: Prisma.FoodStockWhereInput | Prisma.FoodStockWhereInput[];
    OR?: Prisma.FoodStockWhereInput[];
    NOT?: Prisma.FoodStockWhereInput | Prisma.FoodStockWhereInput[];
    id?: Prisma.StringFilter<"FoodStock"> | string;
    petId?: Prisma.StringFilter<"FoodStock"> | string;
    brandName?: Prisma.StringFilter<"FoodStock"> | string;
    totalWeightGrams?: Prisma.IntFilter<"FoodStock"> | number;
    dailyPortionGrams?: Prisma.IntFilter<"FoodStock"> | number;
    purchaseDate?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    isActive?: Prisma.BoolFilter<"FoodStock"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
};
export type FoodStockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    brandName?: Prisma.SortOrder;
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    estimatedEmptyDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    pet?: Prisma.PetOrderByWithRelationInput;
};
export type FoodStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FoodStockWhereInput | Prisma.FoodStockWhereInput[];
    OR?: Prisma.FoodStockWhereInput[];
    NOT?: Prisma.FoodStockWhereInput | Prisma.FoodStockWhereInput[];
    petId?: Prisma.StringFilter<"FoodStock"> | string;
    brandName?: Prisma.StringFilter<"FoodStock"> | string;
    totalWeightGrams?: Prisma.IntFilter<"FoodStock"> | number;
    dailyPortionGrams?: Prisma.IntFilter<"FoodStock"> | number;
    purchaseDate?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    isActive?: Prisma.BoolFilter<"FoodStock"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
}, "id">;
export type FoodStockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    brandName?: Prisma.SortOrder;
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    estimatedEmptyDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FoodStockCountOrderByAggregateInput;
    _avg?: Prisma.FoodStockAvgOrderByAggregateInput;
    _max?: Prisma.FoodStockMaxOrderByAggregateInput;
    _min?: Prisma.FoodStockMinOrderByAggregateInput;
    _sum?: Prisma.FoodStockSumOrderByAggregateInput;
};
export type FoodStockScalarWhereWithAggregatesInput = {
    AND?: Prisma.FoodStockScalarWhereWithAggregatesInput | Prisma.FoodStockScalarWhereWithAggregatesInput[];
    OR?: Prisma.FoodStockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FoodStockScalarWhereWithAggregatesInput | Prisma.FoodStockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FoodStock"> | string;
    petId?: Prisma.StringWithAggregatesFilter<"FoodStock"> | string;
    brandName?: Prisma.StringWithAggregatesFilter<"FoodStock"> | string;
    totalWeightGrams?: Prisma.IntWithAggregatesFilter<"FoodStock"> | number;
    dailyPortionGrams?: Prisma.IntWithAggregatesFilter<"FoodStock"> | number;
    purchaseDate?: Prisma.DateTimeWithAggregatesFilter<"FoodStock"> | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeWithAggregatesFilter<"FoodStock"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"FoodStock"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FoodStock"> | Date | string;
};
export type FoodStockCreateInput = {
    id?: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate?: Date | string;
    estimatedEmptyDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
    pet: Prisma.PetCreateNestedOneWithoutFoodStocksInput;
};
export type FoodStockUncheckedCreateInput = {
    id?: string;
    petId: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate?: Date | string;
    estimatedEmptyDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type FoodStockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutFoodStocksNestedInput;
};
export type FoodStockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    petId?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodStockCreateManyInput = {
    id?: string;
    petId: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate?: Date | string;
    estimatedEmptyDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type FoodStockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodStockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    petId?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodStockListRelationFilter = {
    every?: Prisma.FoodStockWhereInput;
    some?: Prisma.FoodStockWhereInput;
    none?: Prisma.FoodStockWhereInput;
};
export type FoodStockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FoodStockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    brandName?: Prisma.SortOrder;
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    estimatedEmptyDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodStockAvgOrderByAggregateInput = {
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
};
export type FoodStockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    brandName?: Prisma.SortOrder;
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    estimatedEmptyDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodStockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    brandName?: Prisma.SortOrder;
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    estimatedEmptyDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FoodStockSumOrderByAggregateInput = {
    totalWeightGrams?: Prisma.SortOrder;
    dailyPortionGrams?: Prisma.SortOrder;
};
export type FoodStockCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.FoodStockCreateWithoutPetInput, Prisma.FoodStockUncheckedCreateWithoutPetInput> | Prisma.FoodStockCreateWithoutPetInput[] | Prisma.FoodStockUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodStockCreateOrConnectWithoutPetInput | Prisma.FoodStockCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.FoodStockCreateManyPetInputEnvelope;
    connect?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
};
export type FoodStockUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.FoodStockCreateWithoutPetInput, Prisma.FoodStockUncheckedCreateWithoutPetInput> | Prisma.FoodStockCreateWithoutPetInput[] | Prisma.FoodStockUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodStockCreateOrConnectWithoutPetInput | Prisma.FoodStockCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.FoodStockCreateManyPetInputEnvelope;
    connect?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
};
export type FoodStockUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.FoodStockCreateWithoutPetInput, Prisma.FoodStockUncheckedCreateWithoutPetInput> | Prisma.FoodStockCreateWithoutPetInput[] | Prisma.FoodStockUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodStockCreateOrConnectWithoutPetInput | Prisma.FoodStockCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.FoodStockUpsertWithWhereUniqueWithoutPetInput | Prisma.FoodStockUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.FoodStockCreateManyPetInputEnvelope;
    set?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    disconnect?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    delete?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    connect?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    update?: Prisma.FoodStockUpdateWithWhereUniqueWithoutPetInput | Prisma.FoodStockUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.FoodStockUpdateManyWithWhereWithoutPetInput | Prisma.FoodStockUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.FoodStockScalarWhereInput | Prisma.FoodStockScalarWhereInput[];
};
export type FoodStockUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.FoodStockCreateWithoutPetInput, Prisma.FoodStockUncheckedCreateWithoutPetInput> | Prisma.FoodStockCreateWithoutPetInput[] | Prisma.FoodStockUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.FoodStockCreateOrConnectWithoutPetInput | Prisma.FoodStockCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.FoodStockUpsertWithWhereUniqueWithoutPetInput | Prisma.FoodStockUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.FoodStockCreateManyPetInputEnvelope;
    set?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    disconnect?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    delete?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    connect?: Prisma.FoodStockWhereUniqueInput | Prisma.FoodStockWhereUniqueInput[];
    update?: Prisma.FoodStockUpdateWithWhereUniqueWithoutPetInput | Prisma.FoodStockUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.FoodStockUpdateManyWithWhereWithoutPetInput | Prisma.FoodStockUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.FoodStockScalarWhereInput | Prisma.FoodStockScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type FoodStockCreateWithoutPetInput = {
    id?: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate?: Date | string;
    estimatedEmptyDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type FoodStockUncheckedCreateWithoutPetInput = {
    id?: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate?: Date | string;
    estimatedEmptyDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type FoodStockCreateOrConnectWithoutPetInput = {
    where: Prisma.FoodStockWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodStockCreateWithoutPetInput, Prisma.FoodStockUncheckedCreateWithoutPetInput>;
};
export type FoodStockCreateManyPetInputEnvelope = {
    data: Prisma.FoodStockCreateManyPetInput | Prisma.FoodStockCreateManyPetInput[];
};
export type FoodStockUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.FoodStockWhereUniqueInput;
    update: Prisma.XOR<Prisma.FoodStockUpdateWithoutPetInput, Prisma.FoodStockUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.FoodStockCreateWithoutPetInput, Prisma.FoodStockUncheckedCreateWithoutPetInput>;
};
export type FoodStockUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.FoodStockWhereUniqueInput;
    data: Prisma.XOR<Prisma.FoodStockUpdateWithoutPetInput, Prisma.FoodStockUncheckedUpdateWithoutPetInput>;
};
export type FoodStockUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.FoodStockScalarWhereInput;
    data: Prisma.XOR<Prisma.FoodStockUpdateManyMutationInput, Prisma.FoodStockUncheckedUpdateManyWithoutPetInput>;
};
export type FoodStockScalarWhereInput = {
    AND?: Prisma.FoodStockScalarWhereInput | Prisma.FoodStockScalarWhereInput[];
    OR?: Prisma.FoodStockScalarWhereInput[];
    NOT?: Prisma.FoodStockScalarWhereInput | Prisma.FoodStockScalarWhereInput[];
    id?: Prisma.StringFilter<"FoodStock"> | string;
    petId?: Prisma.StringFilter<"FoodStock"> | string;
    brandName?: Prisma.StringFilter<"FoodStock"> | string;
    totalWeightGrams?: Prisma.IntFilter<"FoodStock"> | number;
    dailyPortionGrams?: Prisma.IntFilter<"FoodStock"> | number;
    purchaseDate?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
    isActive?: Prisma.BoolFilter<"FoodStock"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FoodStock"> | Date | string;
};
export type FoodStockCreateManyPetInput = {
    id?: string;
    brandName: string;
    totalWeightGrams: number;
    dailyPortionGrams: number;
    purchaseDate?: Date | string;
    estimatedEmptyDate: Date | string;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type FoodStockUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodStockUncheckedUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodStockUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    brandName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalWeightGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    dailyPortionGrams?: Prisma.IntFieldUpdateOperationsInput | number;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estimatedEmptyDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FoodStockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    brandName?: boolean;
    totalWeightGrams?: boolean;
    dailyPortionGrams?: boolean;
    purchaseDate?: boolean;
    estimatedEmptyDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodStock"]>;
export type FoodStockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    brandName?: boolean;
    totalWeightGrams?: boolean;
    dailyPortionGrams?: boolean;
    purchaseDate?: boolean;
    estimatedEmptyDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodStock"]>;
export type FoodStockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    brandName?: boolean;
    totalWeightGrams?: boolean;
    dailyPortionGrams?: boolean;
    purchaseDate?: boolean;
    estimatedEmptyDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["foodStock"]>;
export type FoodStockSelectScalar = {
    id?: boolean;
    petId?: boolean;
    brandName?: boolean;
    totalWeightGrams?: boolean;
    dailyPortionGrams?: boolean;
    purchaseDate?: boolean;
    estimatedEmptyDate?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type FoodStockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "petId" | "brandName" | "totalWeightGrams" | "dailyPortionGrams" | "purchaseDate" | "estimatedEmptyDate" | "isActive" | "createdAt", ExtArgs["result"]["foodStock"]>;
export type FoodStockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type FoodStockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type FoodStockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type $FoodStockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FoodStock";
    objects: {
        pet: Prisma.$PetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        petId: string;
        brandName: string;
        totalWeightGrams: number;
        dailyPortionGrams: number;
        purchaseDate: Date;
        estimatedEmptyDate: Date;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["foodStock"]>;
    composites: {};
};
export type FoodStockGetPayload<S extends boolean | null | undefined | FoodStockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FoodStockPayload, S>;
export type FoodStockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FoodStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FoodStockCountAggregateInputType | true;
};
export interface FoodStockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FoodStock'];
        meta: {
            name: 'FoodStock';
        };
    };
    findUnique<T extends FoodStockFindUniqueArgs>(args: Prisma.SelectSubset<T, FoodStockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FoodStockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FoodStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FoodStockFindFirstArgs>(args?: Prisma.SelectSubset<T, FoodStockFindFirstArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FoodStockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FoodStockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FoodStockFindManyArgs>(args?: Prisma.SelectSubset<T, FoodStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FoodStockCreateArgs>(args: Prisma.SelectSubset<T, FoodStockCreateArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FoodStockCreateManyArgs>(args?: Prisma.SelectSubset<T, FoodStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FoodStockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FoodStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FoodStockDeleteArgs>(args: Prisma.SelectSubset<T, FoodStockDeleteArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FoodStockUpdateArgs>(args: Prisma.SelectSubset<T, FoodStockUpdateArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FoodStockDeleteManyArgs>(args?: Prisma.SelectSubset<T, FoodStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FoodStockUpdateManyArgs>(args: Prisma.SelectSubset<T, FoodStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FoodStockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FoodStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FoodStockUpsertArgs>(args: Prisma.SelectSubset<T, FoodStockUpsertArgs<ExtArgs>>): Prisma.Prisma__FoodStockClient<runtime.Types.Result.GetResult<Prisma.$FoodStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FoodStockCountArgs>(args?: Prisma.Subset<T, FoodStockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FoodStockCountAggregateOutputType> : number>;
    aggregate<T extends FoodStockAggregateArgs>(args: Prisma.Subset<T, FoodStockAggregateArgs>): Prisma.PrismaPromise<GetFoodStockAggregateType<T>>;
    groupBy<T extends FoodStockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FoodStockGroupByArgs['orderBy'];
    } : {
        orderBy?: FoodStockGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FoodStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FoodStockFieldRefs;
}
export interface Prisma__FoodStockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pet<T extends Prisma.PetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PetDefaultArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FoodStockFieldRefs {
    readonly id: Prisma.FieldRef<"FoodStock", 'String'>;
    readonly petId: Prisma.FieldRef<"FoodStock", 'String'>;
    readonly brandName: Prisma.FieldRef<"FoodStock", 'String'>;
    readonly totalWeightGrams: Prisma.FieldRef<"FoodStock", 'Int'>;
    readonly dailyPortionGrams: Prisma.FieldRef<"FoodStock", 'Int'>;
    readonly purchaseDate: Prisma.FieldRef<"FoodStock", 'DateTime'>;
    readonly estimatedEmptyDate: Prisma.FieldRef<"FoodStock", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"FoodStock", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"FoodStock", 'DateTime'>;
}
export type FoodStockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where: Prisma.FoodStockWhereUniqueInput;
};
export type FoodStockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where: Prisma.FoodStockWhereUniqueInput;
};
export type FoodStockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where?: Prisma.FoodStockWhereInput;
    orderBy?: Prisma.FoodStockOrderByWithRelationInput | Prisma.FoodStockOrderByWithRelationInput[];
    cursor?: Prisma.FoodStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodStockScalarFieldEnum | Prisma.FoodStockScalarFieldEnum[];
};
export type FoodStockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where?: Prisma.FoodStockWhereInput;
    orderBy?: Prisma.FoodStockOrderByWithRelationInput | Prisma.FoodStockOrderByWithRelationInput[];
    cursor?: Prisma.FoodStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodStockScalarFieldEnum | Prisma.FoodStockScalarFieldEnum[];
};
export type FoodStockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where?: Prisma.FoodStockWhereInput;
    orderBy?: Prisma.FoodStockOrderByWithRelationInput | Prisma.FoodStockOrderByWithRelationInput[];
    cursor?: Prisma.FoodStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FoodStockScalarFieldEnum | Prisma.FoodStockScalarFieldEnum[];
};
export type FoodStockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodStockCreateInput, Prisma.FoodStockUncheckedCreateInput>;
};
export type FoodStockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FoodStockCreateManyInput | Prisma.FoodStockCreateManyInput[];
};
export type FoodStockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    data: Prisma.FoodStockCreateManyInput | Prisma.FoodStockCreateManyInput[];
    include?: Prisma.FoodStockIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FoodStockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodStockUpdateInput, Prisma.FoodStockUncheckedUpdateInput>;
    where: Prisma.FoodStockWhereUniqueInput;
};
export type FoodStockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FoodStockUpdateManyMutationInput, Prisma.FoodStockUncheckedUpdateManyInput>;
    where?: Prisma.FoodStockWhereInput;
    limit?: number;
};
export type FoodStockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FoodStockUpdateManyMutationInput, Prisma.FoodStockUncheckedUpdateManyInput>;
    where?: Prisma.FoodStockWhereInput;
    limit?: number;
    include?: Prisma.FoodStockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FoodStockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where: Prisma.FoodStockWhereUniqueInput;
    create: Prisma.XOR<Prisma.FoodStockCreateInput, Prisma.FoodStockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FoodStockUpdateInput, Prisma.FoodStockUncheckedUpdateInput>;
};
export type FoodStockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
    where: Prisma.FoodStockWhereUniqueInput;
};
export type FoodStockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FoodStockWhereInput;
    limit?: number;
};
export type FoodStockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FoodStockSelect<ExtArgs> | null;
    omit?: Prisma.FoodStockOmit<ExtArgs> | null;
    include?: Prisma.FoodStockInclude<ExtArgs> | null;
};
