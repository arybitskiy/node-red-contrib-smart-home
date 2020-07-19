import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/011A:0605:0111",
            name: "OzwInfoPage",
          },
          { text: "images/enerwave/zwnrsm1plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2242/",
            id: "0605",
            name: "ZWProductPage",
            type: "0111",
          },
          { text: "ZWN-RSM2", id: "0605", name: "Identifier", type: "0111" },
          { text: "Smart Dual Relay Switch Module", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2242/ZWN-RSM2 2017-2-28.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The ZWN-RSM2 Switch Module  have two channels switch ,that  is a component of lighting control system, it can not be used separately but should turn an existing switch into a Z-Wave switch. This ZWN-RSM2 module is a Z-Wave enabled device and is fully compatible with other Z-Wave certified device from other manufacturers. In a Z-Wave network, each device is designed to act as a wireless repeater. Once the ZWN-RSM2 module is installed and setup with in your wall, it will retransmit the RF signal from one device to another until the intended device to intended device is reached. This ensures that the signal is received by its intended destination",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0605",
            name: "FrequencyName",
            type: "0111",
          },
          {
            text:
              "Once program button is pressed and hold for 10 second, the device will send a device reset locally notification to controller. Then clear all of information for the network, and restore factory defaults, and reset the module. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "When the controller is in remove mode,Press and release the program button of ZWN-RSM2 module, or Flick 3 times of the connected switch with Aux1 line (or Aux2 line) in 1.5 second. Then the controller will remove the module from current Z-Wave network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "When the controller is in add mode,Press and release the program button of ZWN-RSM2 module,or Flick 3 times of the connected switch with Aux1 line(or Aux 2 line) in 1.5 second. Then the controller will add the module into current Z-Wave network.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1777/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2242/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Send basic report", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
