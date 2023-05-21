type init = {
	s: number
	z: number
}

type next = {
	s?: string
	m: boolean
}




type proto = Pick<
	init,
	Exclude<
		keyof init,
		keyof next
	>>


type unit = proto & next

const aggregation: unit = {
	z: 123,
	s: 'x',
	m: true,
};

type sss = typeof aggregation.s



