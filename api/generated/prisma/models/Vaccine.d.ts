import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VaccineModel = runtime.Types.Result.DefaultSelection<Prisma.$VaccinePayload>;
export type AggregateVaccine = {
    _count: VaccineCountAggregateOutputType | null;
    _min: VaccineMinAggregateOutputType | null;
    _max: VaccineMaxAggregateOutputType | null;
};
export type VaccineMinAggregateOutputType = {
    id: string | null;
    petId: string | null;
    name: string | null;
    applicationDate: Date | null;
    nextDueDate: Date | null;
    veterinarian: string | null;
    clinic: string | null;
    createdAt: Date | null;
};
export type VaccineMaxAggregateOutputType = {
    id: string | null;
    petId: string | null;
    name: string | null;
    applicationDate: Date | null;
    nextDueDate: Date | null;
    veterinarian: string | null;
    clinic: string | null;
    createdAt: Date | null;
};
export type VaccineCountAggregateOutputType = {
    id: number;
    petId: number;
    name: number;
    applicationDate: number;
    nextDueDate: number;
    veterinarian: number;
    clinic: number;
    createdAt: number;
    _all: number;
};
export type VaccineMinAggregateInputType = {
    id?: true;
    petId?: true;
    name?: true;
    applicationDate?: true;
    nextDueDate?: true;
    veterinarian?: true;
    clinic?: true;
    createdAt?: true;
};
export type VaccineMaxAggregateInputType = {
    id?: true;
    petId?: true;
    name?: true;
    applicationDate?: true;
    nextDueDate?: true;
    veterinarian?: true;
    clinic?: true;
    createdAt?: true;
};
export type VaccineCountAggregateInputType = {
    id?: true;
    petId?: true;
    name?: true;
    applicationDate?: true;
    nextDueDate?: true;
    veterinarian?: true;
    clinic?: true;
    createdAt?: true;
    _all?: true;
};
export type VaccineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithRelationInput | Prisma.VaccineOrderByWithRelationInput[];
    cursor?: Prisma.VaccineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VaccineCountAggregateInputType;
    _min?: VaccineMinAggregateInputType;
    _max?: VaccineMaxAggregateInputType;
};
export type GetVaccineAggregateType<T extends VaccineAggregateArgs> = {
    [P in keyof T & keyof AggregateVaccine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVaccine[P]> : Prisma.GetScalarType<T[P], AggregateVaccine[P]>;
};
export type VaccineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithAggregationInput | Prisma.VaccineOrderByWithAggregationInput[];
    by: Prisma.VaccineScalarFieldEnum[] | Prisma.VaccineScalarFieldEnum;
    having?: Prisma.VaccineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VaccineCountAggregateInputType | true;
    _min?: VaccineMinAggregateInputType;
    _max?: VaccineMaxAggregateInputType;
};
export type VaccineGroupByOutputType = {
    id: string;
    petId: string;
    name: string;
    applicationDate: Date;
    nextDueDate: Date;
    veterinarian: string | null;
    clinic: string | null;
    createdAt: Date;
    _count: VaccineCountAggregateOutputType | null;
    _min: VaccineMinAggregateOutputType | null;
    _max: VaccineMaxAggregateOutputType | null;
};
export type GetVaccineGroupByPayload<T extends VaccineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VaccineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VaccineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VaccineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VaccineGroupByOutputType[P]>;
}>>;
export type VaccineWhereInput = {
    AND?: Prisma.VaccineWhereInput | Prisma.VaccineWhereInput[];
    OR?: Prisma.VaccineWhereInput[];
    NOT?: Prisma.VaccineWhereInput | Prisma.VaccineWhereInput[];
    id?: Prisma.StringFilter<"Vaccine"> | string;
    petId?: Prisma.StringFilter<"Vaccine"> | string;
    name?: Prisma.StringFilter<"Vaccine"> | string;
    applicationDate?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    nextDueDate?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    veterinarian?: Prisma.StringNullableFilter<"Vaccine"> | string | null;
    clinic?: Prisma.StringNullableFilter<"Vaccine"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
};
export type VaccineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    veterinarian?: Prisma.SortOrderInput | Prisma.SortOrder;
    clinic?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    pet?: Prisma.PetOrderByWithRelationInput;
};
export type VaccineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VaccineWhereInput | Prisma.VaccineWhereInput[];
    OR?: Prisma.VaccineWhereInput[];
    NOT?: Prisma.VaccineWhereInput | Prisma.VaccineWhereInput[];
    petId?: Prisma.StringFilter<"Vaccine"> | string;
    name?: Prisma.StringFilter<"Vaccine"> | string;
    applicationDate?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    nextDueDate?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    veterinarian?: Prisma.StringNullableFilter<"Vaccine"> | string | null;
    clinic?: Prisma.StringNullableFilter<"Vaccine"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
}, "id">;
export type VaccineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    veterinarian?: Prisma.SortOrderInput | Prisma.SortOrder;
    clinic?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VaccineCountOrderByAggregateInput;
    _max?: Prisma.VaccineMaxOrderByAggregateInput;
    _min?: Prisma.VaccineMinOrderByAggregateInput;
};
export type VaccineScalarWhereWithAggregatesInput = {
    AND?: Prisma.VaccineScalarWhereWithAggregatesInput | Prisma.VaccineScalarWhereWithAggregatesInput[];
    OR?: Prisma.VaccineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VaccineScalarWhereWithAggregatesInput | Prisma.VaccineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Vaccine"> | string;
    petId?: Prisma.StringWithAggregatesFilter<"Vaccine"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Vaccine"> | string;
    applicationDate?: Prisma.DateTimeWithAggregatesFilter<"Vaccine"> | Date | string;
    nextDueDate?: Prisma.DateTimeWithAggregatesFilter<"Vaccine"> | Date | string;
    veterinarian?: Prisma.StringNullableWithAggregatesFilter<"Vaccine"> | string | null;
    clinic?: Prisma.StringNullableWithAggregatesFilter<"Vaccine"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vaccine"> | Date | string;
};
export type VaccineCreateInput = {
    id?: string;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    veterinarian?: string | null;
    clinic?: string | null;
    createdAt?: Date | string;
    pet: Prisma.PetCreateNestedOneWithoutVaccinesInput;
};
export type VaccineUncheckedCreateInput = {
    id?: string;
    petId: string;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    veterinarian?: string | null;
    clinic?: string | null;
    createdAt?: Date | string;
};
export type VaccineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutVaccinesNestedInput;
};
export type VaccineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    petId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VaccineCreateManyInput = {
    id?: string;
    petId: string;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    veterinarian?: string | null;
    clinic?: string | null;
    createdAt?: Date | string;
};
export type VaccineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VaccineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    petId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VaccineListRelationFilter = {
    every?: Prisma.VaccineWhereInput;
    some?: Prisma.VaccineWhereInput;
    none?: Prisma.VaccineWhereInput;
};
export type VaccineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VaccineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    veterinarian?: Prisma.SortOrder;
    clinic?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VaccineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    veterinarian?: Prisma.SortOrder;
    clinic?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VaccineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    veterinarian?: Prisma.SortOrder;
    clinic?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VaccineCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.VaccineCreateWithoutPetInput, Prisma.VaccineUncheckedCreateWithoutPetInput> | Prisma.VaccineCreateWithoutPetInput[] | Prisma.VaccineUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VaccineCreateOrConnectWithoutPetInput | Prisma.VaccineCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.VaccineCreateManyPetInputEnvelope;
    connect?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
};
export type VaccineUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.VaccineCreateWithoutPetInput, Prisma.VaccineUncheckedCreateWithoutPetInput> | Prisma.VaccineCreateWithoutPetInput[] | Prisma.VaccineUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VaccineCreateOrConnectWithoutPetInput | Prisma.VaccineCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.VaccineCreateManyPetInputEnvelope;
    connect?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
};
export type VaccineUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.VaccineCreateWithoutPetInput, Prisma.VaccineUncheckedCreateWithoutPetInput> | Prisma.VaccineCreateWithoutPetInput[] | Prisma.VaccineUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VaccineCreateOrConnectWithoutPetInput | Prisma.VaccineCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.VaccineUpsertWithWhereUniqueWithoutPetInput | Prisma.VaccineUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.VaccineCreateManyPetInputEnvelope;
    set?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    disconnect?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    delete?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    connect?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    update?: Prisma.VaccineUpdateWithWhereUniqueWithoutPetInput | Prisma.VaccineUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.VaccineUpdateManyWithWhereWithoutPetInput | Prisma.VaccineUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.VaccineScalarWhereInput | Prisma.VaccineScalarWhereInput[];
};
export type VaccineUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.VaccineCreateWithoutPetInput, Prisma.VaccineUncheckedCreateWithoutPetInput> | Prisma.VaccineCreateWithoutPetInput[] | Prisma.VaccineUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.VaccineCreateOrConnectWithoutPetInput | Prisma.VaccineCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.VaccineUpsertWithWhereUniqueWithoutPetInput | Prisma.VaccineUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.VaccineCreateManyPetInputEnvelope;
    set?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    disconnect?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    delete?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    connect?: Prisma.VaccineWhereUniqueInput | Prisma.VaccineWhereUniqueInput[];
    update?: Prisma.VaccineUpdateWithWhereUniqueWithoutPetInput | Prisma.VaccineUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.VaccineUpdateManyWithWhereWithoutPetInput | Prisma.VaccineUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.VaccineScalarWhereInput | Prisma.VaccineScalarWhereInput[];
};
export type VaccineCreateWithoutPetInput = {
    id?: string;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    veterinarian?: string | null;
    clinic?: string | null;
    createdAt?: Date | string;
};
export type VaccineUncheckedCreateWithoutPetInput = {
    id?: string;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    veterinarian?: string | null;
    clinic?: string | null;
    createdAt?: Date | string;
};
export type VaccineCreateOrConnectWithoutPetInput = {
    where: Prisma.VaccineWhereUniqueInput;
    create: Prisma.XOR<Prisma.VaccineCreateWithoutPetInput, Prisma.VaccineUncheckedCreateWithoutPetInput>;
};
export type VaccineCreateManyPetInputEnvelope = {
    data: Prisma.VaccineCreateManyPetInput | Prisma.VaccineCreateManyPetInput[];
};
export type VaccineUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.VaccineWhereUniqueInput;
    update: Prisma.XOR<Prisma.VaccineUpdateWithoutPetInput, Prisma.VaccineUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.VaccineCreateWithoutPetInput, Prisma.VaccineUncheckedCreateWithoutPetInput>;
};
export type VaccineUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.VaccineWhereUniqueInput;
    data: Prisma.XOR<Prisma.VaccineUpdateWithoutPetInput, Prisma.VaccineUncheckedUpdateWithoutPetInput>;
};
export type VaccineUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.VaccineScalarWhereInput;
    data: Prisma.XOR<Prisma.VaccineUpdateManyMutationInput, Prisma.VaccineUncheckedUpdateManyWithoutPetInput>;
};
export type VaccineScalarWhereInput = {
    AND?: Prisma.VaccineScalarWhereInput | Prisma.VaccineScalarWhereInput[];
    OR?: Prisma.VaccineScalarWhereInput[];
    NOT?: Prisma.VaccineScalarWhereInput | Prisma.VaccineScalarWhereInput[];
    id?: Prisma.StringFilter<"Vaccine"> | string;
    petId?: Prisma.StringFilter<"Vaccine"> | string;
    name?: Prisma.StringFilter<"Vaccine"> | string;
    applicationDate?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    nextDueDate?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
    veterinarian?: Prisma.StringNullableFilter<"Vaccine"> | string | null;
    clinic?: Prisma.StringNullableFilter<"Vaccine"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Vaccine"> | Date | string;
};
export type VaccineCreateManyPetInput = {
    id?: string;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    veterinarian?: string | null;
    clinic?: string | null;
    createdAt?: Date | string;
};
export type VaccineUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VaccineUncheckedUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VaccineUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    veterinarian?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clinic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VaccineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    veterinarian?: boolean;
    clinic?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vaccine"]>;
export type VaccineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    veterinarian?: boolean;
    clinic?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vaccine"]>;
export type VaccineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    veterinarian?: boolean;
    clinic?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vaccine"]>;
export type VaccineSelectScalar = {
    id?: boolean;
    petId?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    veterinarian?: boolean;
    clinic?: boolean;
    createdAt?: boolean;
};
export type VaccineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "petId" | "name" | "applicationDate" | "nextDueDate" | "veterinarian" | "clinic" | "createdAt", ExtArgs["result"]["vaccine"]>;
export type VaccineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type VaccineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type VaccineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type $VaccinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vaccine";
    objects: {
        pet: Prisma.$PetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        petId: string;
        name: string;
        applicationDate: Date;
        nextDueDate: Date;
        veterinarian: string | null;
        clinic: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["vaccine"]>;
    composites: {};
};
export type VaccineGetPayload<S extends boolean | null | undefined | VaccineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VaccinePayload, S>;
export type VaccineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VaccineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VaccineCountAggregateInputType | true;
};
export interface VaccineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vaccine'];
        meta: {
            name: 'Vaccine';
        };
    };
    findUnique<T extends VaccineFindUniqueArgs>(args: Prisma.SelectSubset<T, VaccineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VaccineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VaccineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VaccineFindFirstArgs>(args?: Prisma.SelectSubset<T, VaccineFindFirstArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VaccineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VaccineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VaccineFindManyArgs>(args?: Prisma.SelectSubset<T, VaccineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VaccineCreateArgs>(args: Prisma.SelectSubset<T, VaccineCreateArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VaccineCreateManyArgs>(args?: Prisma.SelectSubset<T, VaccineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VaccineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VaccineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VaccineDeleteArgs>(args: Prisma.SelectSubset<T, VaccineDeleteArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VaccineUpdateArgs>(args: Prisma.SelectSubset<T, VaccineUpdateArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VaccineDeleteManyArgs>(args?: Prisma.SelectSubset<T, VaccineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VaccineUpdateManyArgs>(args: Prisma.SelectSubset<T, VaccineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VaccineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VaccineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VaccineUpsertArgs>(args: Prisma.SelectSubset<T, VaccineUpsertArgs<ExtArgs>>): Prisma.Prisma__VaccineClient<runtime.Types.Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VaccineCountArgs>(args?: Prisma.Subset<T, VaccineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VaccineCountAggregateOutputType> : number>;
    aggregate<T extends VaccineAggregateArgs>(args: Prisma.Subset<T, VaccineAggregateArgs>): Prisma.PrismaPromise<GetVaccineAggregateType<T>>;
    groupBy<T extends VaccineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VaccineGroupByArgs['orderBy'];
    } : {
        orderBy?: VaccineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VaccineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaccineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VaccineFieldRefs;
}
export interface Prisma__VaccineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pet<T extends Prisma.PetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PetDefaultArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VaccineFieldRefs {
    readonly id: Prisma.FieldRef<"Vaccine", 'String'>;
    readonly petId: Prisma.FieldRef<"Vaccine", 'String'>;
    readonly name: Prisma.FieldRef<"Vaccine", 'String'>;
    readonly applicationDate: Prisma.FieldRef<"Vaccine", 'DateTime'>;
    readonly nextDueDate: Prisma.FieldRef<"Vaccine", 'DateTime'>;
    readonly veterinarian: Prisma.FieldRef<"Vaccine", 'String'>;
    readonly clinic: Prisma.FieldRef<"Vaccine", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Vaccine", 'DateTime'>;
}
export type VaccineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where: Prisma.VaccineWhereUniqueInput;
};
export type VaccineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where: Prisma.VaccineWhereUniqueInput;
};
export type VaccineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithRelationInput | Prisma.VaccineOrderByWithRelationInput[];
    cursor?: Prisma.VaccineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VaccineScalarFieldEnum | Prisma.VaccineScalarFieldEnum[];
};
export type VaccineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithRelationInput | Prisma.VaccineOrderByWithRelationInput[];
    cursor?: Prisma.VaccineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VaccineScalarFieldEnum | Prisma.VaccineScalarFieldEnum[];
};
export type VaccineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where?: Prisma.VaccineWhereInput;
    orderBy?: Prisma.VaccineOrderByWithRelationInput | Prisma.VaccineOrderByWithRelationInput[];
    cursor?: Prisma.VaccineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VaccineScalarFieldEnum | Prisma.VaccineScalarFieldEnum[];
};
export type VaccineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VaccineCreateInput, Prisma.VaccineUncheckedCreateInput>;
};
export type VaccineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VaccineCreateManyInput | Prisma.VaccineCreateManyInput[];
};
export type VaccineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    data: Prisma.VaccineCreateManyInput | Prisma.VaccineCreateManyInput[];
    include?: Prisma.VaccineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VaccineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VaccineUpdateInput, Prisma.VaccineUncheckedUpdateInput>;
    where: Prisma.VaccineWhereUniqueInput;
};
export type VaccineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VaccineUpdateManyMutationInput, Prisma.VaccineUncheckedUpdateManyInput>;
    where?: Prisma.VaccineWhereInput;
    limit?: number;
};
export type VaccineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VaccineUpdateManyMutationInput, Prisma.VaccineUncheckedUpdateManyInput>;
    where?: Prisma.VaccineWhereInput;
    limit?: number;
    include?: Prisma.VaccineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VaccineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where: Prisma.VaccineWhereUniqueInput;
    create: Prisma.XOR<Prisma.VaccineCreateInput, Prisma.VaccineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VaccineUpdateInput, Prisma.VaccineUncheckedUpdateInput>;
};
export type VaccineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
    where: Prisma.VaccineWhereUniqueInput;
};
export type VaccineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VaccineWhereInput;
    limit?: number;
};
export type VaccineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VaccineSelect<ExtArgs> | null;
    omit?: Prisma.VaccineOmit<ExtArgs> | null;
    include?: Prisma.VaccineInclude<ExtArgs> | null;
};
