import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0002:0001:8005",
            name: "OzwInfoPage",
          },
          { text: "images/danfoss/living.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/93/",
            id: "0001",
            name: "ZWProductPage",
            type: "8005",
          },
          { text: "014G0001", id: "0001", name: "Identifier", type: "8005" },
          { text: "Danfoss Living Connect", name: "Name" },
          {
            text:
              "living connect is an electronic radiator thermostat for homes. Wireless temperature control – all around the house.\n\n\nFor total control of your indoor environment, living connect radiator thermostats work wirelessly with Danfoss Link, bringing you the highest performance in home heating control. living connect thermostats have all the smart features of the living eco model, plus they can be wirelessly controlled from a single Danfoss Link control screen centrally placed in the home. This means you can set all living connect thermostats at once, and heating can still be controlled room-by-room. A user-friendly interface with a colourful touchscreen make operating a Danfoss Link simple. It is one of the most immediate, most convenient and most cost-effective ways to improve your home's energy efficiency.\nProduct Name:\tliving connect\nBrand Name:\tDanfoss\nProduct Line:\tRadiator Thermostat\t\nBattery Type:\tAAA\nBattery Count:\t2\nDescription:\tRadiator Thermostat\nInclusion Note:\tShort push middle button\nWakeup Note:\tShort push middle button",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "8005",
          },
          {
            text:
              "http://www.danfoss.com/businessareas/heating/products/literature/he/radiator-thermostats/radiator-sensors/living-by-danfoss/living-connect/b7bea5b9-eb96-45d5-b229-02739a4779c2.html",
            name: "ProductPage",
          },
          {
            text:
              "http://heating.danfoss.com/PCMPDF/Z_wave_living_connect_VDHMB202.pdf",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/93/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "67", Compatibility: [{ OverridePrecision: [2], Base: [1] }] },
    ],
  },
};

export default config;
