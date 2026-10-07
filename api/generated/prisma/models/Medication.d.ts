import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicationModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicationPayload>;
export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null;
    _min: MedicationMinAggregateOutputType | null;
    _max: MedicationMaxAggregateOutputType | null;
};
export type MedicationMinAggregateOutputType = {
    id: string | null;
    petId: string | null;
    type: $Enums.MedicationType | null;
    name: string | null;
    applicationDate: Date | null;
    nextDueDate: Date | null;
    createdAt: Date | null;
};
export type MedicationMaxAggregateOutputType = {
    id: string | null;
    petId: string | null;
    type: $Enums.MedicationType | null;
    name: string | null;
    applicationDate: Date | null;
    nextDueDate: Date | null;
    createdAt: Date | null;
};
export type MedicationCountAggregateOutputType = {
    id: number;
    petId: number;
    type: number;
    name: number;
    applicationDate: number;
    nextDueDate: number;
    createdAt: number;
    _all: number;
};
export type MedicationMinAggregateInputType = {
    id?: true;
    petId?: true;
    type?: true;
    name?: true;
    applicationDate?: true;
    nextDueDate?: true;
    createdAt?: true;
};
export type MedicationMaxAggregateInputType = {
    id?: true;
    petId?: true;
    type?: true;
    name?: true;
    applicationDate?: true;
    nextDueDate?: true;
    createdAt?: true;
};
export type MedicationCountAggregateInputType = {
    id?: true;
    petId?: true;
    type?: true;
    name?: true;
    applicationDate?: true;
    nextDueDate?: true;
    createdAt?: true;
    _all?: true;
};
export type MedicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithRelationInput | Prisma.MedicationOrderByWithRelationInput[];
    cursor?: Prisma.MedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicationCountAggregateInputType;
    _min?: MedicationMinAggregateInputType;
    _max?: MedicationMaxAggregateInputType;
};
export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
    [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedication[P]> : Prisma.GetScalarType<T[P], AggregateMedication[P]>;
};
export type MedicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithAggregationInput | Prisma.MedicationOrderByWithAggregationInput[];
    by: Prisma.MedicationScalarFieldEnum[] | Prisma.MedicationScalarFieldEnum;
    having?: Prisma.MedicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicationCountAggregateInputType | true;
    _min?: MedicationMinAggregateInputType;
    _max?: MedicationMaxAggregateInputType;
};
export type MedicationGroupByOutputType = {
    id: string;
    petId: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date;
    nextDueDate: Date;
    createdAt: Date;
    _count: MedicationCountAggregateOutputType | null;
    _min: MedicationMinAggregateOutputType | null;
    _max: MedicationMaxAggregateOutputType | null;
};
export type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicationGroupByOutputType[P]>;
}>>;
export type MedicationWhereInput = {
    AND?: Prisma.MedicationWhereInput | Prisma.MedicationWhereInput[];
    OR?: Prisma.MedicationWhereInput[];
    NOT?: Prisma.MedicationWhereInput | Prisma.MedicationWhereInput[];
    id?: Prisma.StringFilter<"Medication"> | string;
    petId?: Prisma.StringFilter<"Medication"> | string;
    type?: Prisma.EnumMedicationTypeFilter<"Medication"> | $Enums.MedicationType;
    name?: Prisma.StringFilter<"Medication"> | string;
    applicationDate?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    nextDueDate?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
};
export type MedicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    pet?: Prisma.PetOrderByWithRelationInput;
};
export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MedicationWhereInput | Prisma.MedicationWhereInput[];
    OR?: Prisma.MedicationWhereInput[];
    NOT?: Prisma.MedicationWhereInput | Prisma.MedicationWhereInput[];
    petId?: Prisma.StringFilter<"Medication"> | string;
    type?: Prisma.EnumMedicationTypeFilter<"Medication"> | $Enums.MedicationType;
    name?: Prisma.StringFilter<"Medication"> | string;
    applicationDate?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    nextDueDate?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    pet?: Prisma.XOR<Prisma.PetScalarRelationFilter, Prisma.PetWhereInput>;
}, "id">;
export type MedicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MedicationCountOrderByAggregateInput;
    _max?: Prisma.MedicationMaxOrderByAggregateInput;
    _min?: Prisma.MedicationMinOrderByAggregateInput;
};
export type MedicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicationScalarWhereWithAggregatesInput | Prisma.MedicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicationScalarWhereWithAggregatesInput | Prisma.MedicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Medication"> | string;
    petId?: Prisma.StringWithAggregatesFilter<"Medication"> | string;
    type?: Prisma.EnumMedicationTypeWithAggregatesFilter<"Medication"> | $Enums.MedicationType;
    name?: Prisma.StringWithAggregatesFilter<"Medication"> | string;
    applicationDate?: Prisma.DateTimeWithAggregatesFilter<"Medication"> | Date | string;
    nextDueDate?: Prisma.DateTimeWithAggregatesFilter<"Medication"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Medication"> | Date | string;
};
export type MedicationCreateInput = {
    id?: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    createdAt?: Date | string;
    pet: Prisma.PetCreateNestedOneWithoutMedicationsInput;
};
export type MedicationUncheckedCreateInput = {
    id?: string;
    petId: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    createdAt?: Date | string;
};
export type MedicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pet?: Prisma.PetUpdateOneRequiredWithoutMedicationsNestedInput;
};
export type MedicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    petId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationCreateManyInput = {
    id?: string;
    petId: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    createdAt?: Date | string;
};
export type MedicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    petId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationListRelationFilter = {
    every?: Prisma.MedicationWhereInput;
    some?: Prisma.MedicationWhereInput;
    none?: Prisma.MedicationWhereInput;
};
export type MedicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    petId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    applicationDate?: Prisma.SortOrder;
    nextDueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.MedicationCreateWithoutPetInput, Prisma.MedicationUncheckedCreateWithoutPetInput> | Prisma.MedicationCreateWithoutPetInput[] | Prisma.MedicationUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.MedicationCreateOrConnectWithoutPetInput | Prisma.MedicationCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.MedicationCreateManyPetInputEnvelope;
    connect?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
};
export type MedicationUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.MedicationCreateWithoutPetInput, Prisma.MedicationUncheckedCreateWithoutPetInput> | Prisma.MedicationCreateWithoutPetInput[] | Prisma.MedicationUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.MedicationCreateOrConnectWithoutPetInput | Prisma.MedicationCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.MedicationCreateManyPetInputEnvelope;
    connect?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
};
export type MedicationUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.MedicationCreateWithoutPetInput, Prisma.MedicationUncheckedCreateWithoutPetInput> | Prisma.MedicationCreateWithoutPetInput[] | Prisma.MedicationUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.MedicationCreateOrConnectWithoutPetInput | Prisma.MedicationCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.MedicationUpsertWithWhereUniqueWithoutPetInput | Prisma.MedicationUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.MedicationCreateManyPetInputEnvelope;
    set?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    disconnect?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    delete?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    connect?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    update?: Prisma.MedicationUpdateWithWhereUniqueWithoutPetInput | Prisma.MedicationUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.MedicationUpdateManyWithWhereWithoutPetInput | Prisma.MedicationUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.MedicationScalarWhereInput | Prisma.MedicationScalarWhereInput[];
};
export type MedicationUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.MedicationCreateWithoutPetInput, Prisma.MedicationUncheckedCreateWithoutPetInput> | Prisma.MedicationCreateWithoutPetInput[] | Prisma.MedicationUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.MedicationCreateOrConnectWithoutPetInput | Prisma.MedicationCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.MedicationUpsertWithWhereUniqueWithoutPetInput | Prisma.MedicationUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.MedicationCreateManyPetInputEnvelope;
    set?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    disconnect?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    delete?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    connect?: Prisma.MedicationWhereUniqueInput | Prisma.MedicationWhereUniqueInput[];
    update?: Prisma.MedicationUpdateWithWhereUniqueWithoutPetInput | Prisma.MedicationUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.MedicationUpdateManyWithWhereWithoutPetInput | Prisma.MedicationUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.MedicationScalarWhereInput | Prisma.MedicationScalarWhereInput[];
};
export type EnumMedicationTypeFieldUpdateOperationsInput = {
    set?: $Enums.MedicationType;
};
export type MedicationCreateWithoutPetInput = {
    id?: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    createdAt?: Date | string;
};
export type MedicationUncheckedCreateWithoutPetInput = {
    id?: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    createdAt?: Date | string;
};
export type MedicationCreateOrConnectWithoutPetInput = {
    where: Prisma.MedicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicationCreateWithoutPetInput, Prisma.MedicationUncheckedCreateWithoutPetInput>;
};
export type MedicationCreateManyPetInputEnvelope = {
    data: Prisma.MedicationCreateManyPetInput | Prisma.MedicationCreateManyPetInput[];
};
export type MedicationUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.MedicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicationUpdateWithoutPetInput, Prisma.MedicationUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.MedicationCreateWithoutPetInput, Prisma.MedicationUncheckedCreateWithoutPetInput>;
};
export type MedicationUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.MedicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicationUpdateWithoutPetInput, Prisma.MedicationUncheckedUpdateWithoutPetInput>;
};
export type MedicationUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.MedicationScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicationUpdateManyMutationInput, Prisma.MedicationUncheckedUpdateManyWithoutPetInput>;
};
export type MedicationScalarWhereInput = {
    AND?: Prisma.MedicationScalarWhereInput | Prisma.MedicationScalarWhereInput[];
    OR?: Prisma.MedicationScalarWhereInput[];
    NOT?: Prisma.MedicationScalarWhereInput | Prisma.MedicationScalarWhereInput[];
    id?: Prisma.StringFilter<"Medication"> | string;
    petId?: Prisma.StringFilter<"Medication"> | string;
    type?: Prisma.EnumMedicationTypeFilter<"Medication"> | $Enums.MedicationType;
    name?: Prisma.StringFilter<"Medication"> | string;
    applicationDate?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    nextDueDate?: Prisma.DateTimeFilter<"Medication"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Medication"> | Date | string;
};
export type MedicationCreateManyPetInput = {
    id?: string;
    type: $Enums.MedicationType;
    name: string;
    applicationDate: Date | string;
    nextDueDate: Date | string;
    createdAt?: Date | string;
};
export type MedicationUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationUncheckedUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumMedicationTypeFieldUpdateOperationsInput | $Enums.MedicationType;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextDueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    type?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medication"]>;
export type MedicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    type?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medication"]>;
export type MedicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    petId?: boolean;
    type?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    createdAt?: boolean;
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medication"]>;
export type MedicationSelectScalar = {
    id?: boolean;
    petId?: boolean;
    type?: boolean;
    name?: boolean;
    applicationDate?: boolean;
    nextDueDate?: boolean;
    createdAt?: boolean;
};
export type MedicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "petId" | "type" | "name" | "applicationDate" | "nextDueDate" | "createdAt", ExtArgs["result"]["medication"]>;
export type MedicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type MedicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pet?: boolean | Prisma.PetDefaultArgs<ExtArgs>;
};
export type $MedicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medication";
    objects: {
        pet: Prisma.$PetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        petId: string;
        type: $Enums.MedicationType;
        name: string;
        applicationDate: Date;
        nextDueDate: Date;
        createdAt: Date;
    }, ExtArgs["result"]["medication"]>;
    composites: {};
};
export type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicationPayload, S>;
export type MedicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicationCountAggregateInputType | true;
};
export interface MedicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medication'];
        meta: {
            name: 'Medication';
        };
    };
    findUnique<T extends MedicationFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicationFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicationFindManyArgs>(args?: Prisma.SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicationCreateArgs>(args: Prisma.SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicationCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MedicationDeleteArgs>(args: Prisma.SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicationUpdateArgs>(args: Prisma.SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicationUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MedicationUpsertArgs>(args: Prisma.SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicationClient<runtime.Types.Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicationCountArgs>(args?: Prisma.Subset<T, MedicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicationCountAggregateOutputType> : number>;
    aggregate<T extends MedicationAggregateArgs>(args: Prisma.Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>;
    groupBy<T extends MedicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicationGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicationFieldRefs;
}
export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pet<T extends Prisma.PetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PetDefaultArgs<ExtArgs>>): Prisma.Prisma__PetClient<runtime.Types.Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicationFieldRefs {
    readonly id: Prisma.FieldRef<"Medication", 'String'>;
    readonly petId: Prisma.FieldRef<"Medication", 'String'>;
    readonly type: Prisma.FieldRef<"Medication", 'MedicationType'>;
    readonly name: Prisma.FieldRef<"Medication", 'String'>;
    readonly applicationDate: Prisma.FieldRef<"Medication", 'DateTime'>;
    readonly nextDueDate: Prisma.FieldRef<"Medication", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Medication", 'DateTime'>;
}
export type MedicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where: Prisma.MedicationWhereUniqueInput;
};
export type MedicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where: Prisma.MedicationWhereUniqueInput;
};
export type MedicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithRelationInput | Prisma.MedicationOrderByWithRelationInput[];
    cursor?: Prisma.MedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationScalarFieldEnum | Prisma.MedicationScalarFieldEnum[];
};
export type MedicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithRelationInput | Prisma.MedicationOrderByWithRelationInput[];
    cursor?: Prisma.MedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationScalarFieldEnum | Prisma.MedicationScalarFieldEnum[];
};
export type MedicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where?: Prisma.MedicationWhereInput;
    orderBy?: Prisma.MedicationOrderByWithRelationInput | Prisma.MedicationOrderByWithRelationInput[];
    cursor?: Prisma.MedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationScalarFieldEnum | Prisma.MedicationScalarFieldEnum[];
};
export type MedicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicationCreateInput, Prisma.MedicationUncheckedCreateInput>;
};
export type MedicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicationCreateManyInput | Prisma.MedicationCreateManyInput[];
};
export type MedicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    data: Prisma.MedicationCreateManyInput | Prisma.MedicationCreateManyInput[];
    include?: Prisma.MedicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MedicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicationUpdateInput, Prisma.MedicationUncheckedUpdateInput>;
    where: Prisma.MedicationWhereUniqueInput;
};
export type MedicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicationUpdateManyMutationInput, Prisma.MedicationUncheckedUpdateManyInput>;
    where?: Prisma.MedicationWhereInput;
    limit?: number;
};
export type MedicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicationUpdateManyMutationInput, Prisma.MedicationUncheckedUpdateManyInput>;
    where?: Prisma.MedicationWhereInput;
    limit?: number;
    include?: Prisma.MedicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MedicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where: Prisma.MedicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicationCreateInput, Prisma.MedicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicationUpdateInput, Prisma.MedicationUncheckedUpdateInput>;
};
export type MedicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
    where: Prisma.MedicationWhereUniqueInput;
};
export type MedicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationWhereInput;
    limit?: number;
};
export type MedicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationSelect<ExtArgs> | null;
    omit?: Prisma.MedicationOmit<ExtArgs> | null;
    include?: Prisma.MedicationInclude<ExtArgs> | null;
};
