

type PrimitiveToPrimitiveNSUnion = number & string;
type PrimitiveToPrimitiveNSInter = number | string;

const m: PrimitiveToPrimitiveNSInter = 123;
const m: PrimitiveToPrimitiveNSUnion = 123;
