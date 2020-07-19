import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:005A:0101",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw090.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1345/",
            id: "005A",
            name: "ZWProductPage",
            type: "0101",
          },
          { text: "Z-Stick Gen5", name: "Name" },
          {
            text:
              "Aeotec Z-Stick Gen5 is a USB controller. When connected to a host controller via USB, it enables the host controller to take part in the Z-Wave network.\n\nProducts that are Z-Wave certified can be used and communicate with other Z-Wave certified devices.",
            name: "Description",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is missing or otherwise inoperable.\n\nPress and hold the Action Button on Z-Stick for 20 seconds and then release.",
            name: "ResetDescription",
          },
          { text: "ZW090-A", id: "005A", name: "Identifier", type: "0101" },
          {
            text:
              "Plug the Z-Stick into USB port of your host Controller and then click the “Exclusion” button on your  PC/host Controller application.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Plug the Z-Stick into USB port of your host Controller and then click the “Inclusion” button on your  PC/host Controller application.",
            name: "InclusionDescription",
          },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1355/Z Stick Gen5 manual 1.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "005A",
            name: "FrequencyName",
            type: "0101",
          },
          {
            text: "https://products.z-wavealliance.org/products/1351/",
            id: "005A",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text: "Australia / New Zealand",
            id: "005A",
            name: "FrequencyName",
            type: "0201",
          },
          { text: "ZW090-B", id: "005A", name: "Identifier", type: "0201" },
          {
            text: "https://products.z-wavealliance.org/products/1355/",
            id: "005A",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "005A",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "ZW090-C", id: "005A", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1345/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1351/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1355/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
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
            index: "81",
            label: "LED indicator configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: [
              "Enable/Disable LED indicator when plugged in",
              {
                text:
                  "Activer / désactiver l'indicateur LED lorsqu'il est branché",
                lang: "fr",
              },
            ],
            Label: [{ text: "Configuration d'indicateur LED", lang: "fr" }],
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "220",
            label: "Configuration of the RF power level",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "10",
            Help:
              "1~10, other= ignore. \n\t\t\t\tA total of 10 levels, level 1 as the weak output power, and so on, 10 for most output power level",
            Item: [
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8", value: "8" },
              { label: "9", value: "9" },
              { label: "10", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "242",
            label: "Security network enabled",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "243",
            label: "Security network key",
            size: "16",
            type: "int",
            Help: "",
          },
          {
            genre: "config",
            index: "252",
            label: "Lock/Unlock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/ unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
            ],
          },
          {
            affects: "all",
            genre: "config",
            index: "255",
            label: "Reset default configuration",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Reset to the default configuration",
          },
        ],
      },
    ],
  },
};

export default config;
