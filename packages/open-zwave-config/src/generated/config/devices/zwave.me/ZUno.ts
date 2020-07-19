import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0001:0110",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/ZUno.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1825/",
            id: "0001",
            name: "ZWProductPage",
            type: "0110",
          },
          {
            text:
              "Hold Service button for five seconds, then press Service button three times.\n\nUse this procedure only if your controller is missing or inoperable.\n\nNote that the user sketch is not erased during exclusion or reset process.",
            name: "ResetDescription",
          },
          {
            text: "Press Service button three times",
            name: "WakeupDescription",
          },
          {
            text: "Press Service button three times",
            name: "ExclusionDescription",
          },
          { text: "Z-Uno", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1825/Z-Uno V3 Manual.pdf",
            name: "ProductManual",
          },
          { text: "v3", id: "0001", name: "Identifier", type: "0110" },
          {
            text: "Press Service button three times",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0110",
          },
          {
            text:
              "Z-Uno is the first and only easy to use developer board that allows you to create your own Z-Wave device without deep knowledge of Z-Wave protocol or programming. Z-Uno is a mix of Z-Wave home automation radio protocol power and Arduino simplicity. Being inspired by Arduino project Z-Uno inherits all concepts of easy-to-use hardware and software solutions, keeping maximum flexibility.\n\nZ-Uno is a fully DIY product. It is made for those who are limited by existing choice of Z-Wave products and wants to extend their smart homes with more sensors and actuators: connect LEDs, buttons, switches, motors or any low voltage sensor including most of Arduino compatible sensors.\n\nZ-Uno programming is done by writing sketch in simplified C language and loaded into Z-Uno using Arduino IDE. Many examples and comprehensive tutorials will help you to make your own project.\n\nThis is one of the two officially certified sketches.\n\nCertified 10 Channels sketch\nhttp://z-uno.z-wave.me/examples/Certified10Channels/",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1825/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Debug mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Debug mode to apply channels, associations and power mode changes on the fly without exclusion-inclusion sequence. Use for debugging only!",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Blink Service LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Blink with service LED during operation",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Control Group", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
