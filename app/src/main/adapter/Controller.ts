export interface ControllerRead<Input, Output> {
  find (params: Input): Promise<Output>;
}

export interface ControllerCreate<Input, Output> {
  create (row: Input): Promise<Output>;
}

export interface ControllerUpdate<Input, Output> {
  update (row: Input): Promise<Output>;
}

export interface ControllerDelete<Output> {
  delete (id: string): Promise<Output>;
}
