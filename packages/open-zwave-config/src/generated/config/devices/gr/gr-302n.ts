import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0152:0003:0500",
            name: "OzwInfoPage",
          },
          { text: "images/gr/gr-302n.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1722/",
            id: "0003",
            name: "ZWProductPage",
            type: "0500",
          },
          { text: "PIR Sensor", name: "Name" },
          {
            text:
              "Press the button unlock and lock-unlock 1 time it will be wake up 10 seconds.",
            name: "WakeupDescription",
          },
          { text: "GR-302N", id: "0003", name: "Identifier", type: "0500" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1722/PIR Sensor_UM.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "0500",
          },
          {
            text:
              "Press the button unlock and lock-unlock 6 times the device will send the reset notification to the list node in the group 1 and erases the device memory.\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Please press the Z-Wave button in the pir sensor when the Z-Wave controller sends the instructions for inclusion, Press the Button: unlock  and lock-unlock 1 time will send the NIF",
            name: "InclusionDescription",
          },
          {
            text:
              "This PIR motion sensor can association lighting switch , until leave the detect area. This PIR have support power supply and you don't replace the battery anymore.",
            name: "Description",
          },
          {
            text:
              "Please press the Z-Wave button in the pir sensor when the Z-Wave controller sends the instructions for exclusion, Times to Press the Button: unlock and lock-unlock 1 time will send the NIF",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1722/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
