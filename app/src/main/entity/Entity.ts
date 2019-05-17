export interface EntityCreate<Input, Output> {
  registerRow (row: Input): Promise<Output>;
}

export interface EntityRead<Input, Output> {
  findAll (options?: Input): Promise<Output[]>;
  findRow (id: string): Promise<Output>;
}

export interface EntityUpdate<Input, Output> {
  updateRow (row: Input): Promise<Output>;
}

export interface EntityDelete<Input, Output> {
  deleteRow (row: Input): Promise<Output>;
}
