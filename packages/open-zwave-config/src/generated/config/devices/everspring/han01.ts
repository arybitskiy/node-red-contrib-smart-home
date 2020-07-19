import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0011",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/han01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/695/",
            id: "0001",
            name: "ZWProductPage",
            type: "0011",
          },
          {
            text:
              "This in-wall switch module is a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Mini size design let the module can easily hide itself into the wall box and that will be good for the house decoration. \nThere are many kind of application by using the module to switch AC power On and Off , one main application is the light control. The new smart relay calibration technology can reduce the inrush current caused by the load and let the module work perfectly with many kind of light like incandescent, fluorescent and LED light.  \n\nThis in-wall switch module is able to detect overload wattage of connected non-dimmable lights or appliances. When detecting overload state, the Module will be disabled and its On/Off button will be lockout of which LED will flash quickly.  However, disconnect and re-connect the wiring of the Module will reset its overload condition to normal status.",
            name: "Description",
          },
          { text: "http://www.everspring.com/HAN01.aspx", name: "ProductPage" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0011",
          },
          { text: "HAN01", id: "0001", name: "Identifier", type: "0011" },
          { text: "Small Z-Wave In-Wall Switch Module", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/695/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
