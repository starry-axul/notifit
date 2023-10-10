export interface IPushService {
  push(): void;
}

export class PushService {
  /* constructor(repository) {
    super(!repository?AssetRepository:repository);
  }*/

  public async push() {
    console.log("service");
  }
}
