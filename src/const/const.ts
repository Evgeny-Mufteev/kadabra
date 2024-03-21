export enum AppRoute {
  Main = '/',
  Models = '/models/:brandId',
  Modifications = '/modifications/:modelId',
  Device = '/device/:deviceId',
  NotFound = '*',
}

export enum APIRoute {
  Brands = '/auto',
  Models = '/model',
  Modifications = '/modif',
  Parameters = '/param',
}
