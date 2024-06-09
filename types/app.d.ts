declare global {
  // fsd required
  declare type RootState = import("../src/shared/stores/store").RootState;
  declare type AppDispatch = import("../src/shared/stores/store").AppDispatch;
}

export {};
