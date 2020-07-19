import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:0002:0003",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tz68.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1952/",
            id: "0002",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Smart Plug in Switch", name: "Name" },
          {
            text:
              "1. Have Z-Wave controller with exclusion mode\n\n2. Press the socket on/off button three times within 1.5 seconds to be excluded from the controller",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Have Z-Wave controller with inclusion mode\n\n2. Press the socket on/off button three times within 1.5 seconds to be included to the controller",
            name: "InclusionDescription",
          },
          { text: "TZ68CN", id: "0002", name: "Identifier", type: "0003" },
          {
            text:
              "1. This plug-in ON/OFF switch in a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. \n2. Each socket is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure the signal to ensure that the signal is received by its intended destination.\n3. You can use the button in the socket to include/exclude, manually on/off or act as a indicator. You can use it to turn on/off appliance remotely via smart home or computer.",
            name: "Description",
          },
          {
            text:
              "1. Press the socket on/off button three times within 1.5 seconds\n2.  then within 1 second to press and hold on for 5 seconds until the socket button LED is off, reset to factory default successfully\n3. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1952/TZ68 User Manual.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe) / Brazil / China",
            id: "0002",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1423/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1948/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1952/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
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
            instance: "1",
            label: "LED behavior",
            size: "1",
            type: "list",
            value: "0",
            Help: "Defines the behavior of the blue LED.",
            Item: [
              { label: "Night light", value: "0" },
              { label: "On indicator", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
