const { authRouter } = require("./Auth")
const { BlockRouter } = require("./BlockRoute")
const { storageAreaRouter } = require("./StorageArea")
const { CategorieRouter } = require("./CategorieRoute")
const { Block_PartRouter } = require("./Block_PartRoute")
const { CommunicationsChannelRouter } = require("./CommunicationsChannelRoute")
const { TruckRouter } = require("./TruckRoute")
const { DriverRouter } = require("./DriverRoute")
const { ContainerRouter } = require("./ContainerRoute")
const { CustomFeeRouter } = require("./CustomFeeRoute")
const { ShipRouter } = require("./ShipRoute")
const { ShipOwnerRouter } = require("./ShipOwnerRoute")
const { QuayRouter } = require("./QuayRoute")
const { TypeRouter } = require("./TypeRoute")
const { ReservationRouter } = require("./ReservationRoute")

module.exports = {
    authRouter,
    BlockRouter,
    storageAreaRouter,
    CategorieRouter,
    Block_PartRouter,
    CommunicationsChannelRouter,
    TruckRouter,
    DriverRouter,
    ContainerRouter,
    CustomFeeRouter,
    ShipRouter,
    ShipOwnerRouter,
    QuayRouter,
    TypeRouter,
    ReservationRouter
}