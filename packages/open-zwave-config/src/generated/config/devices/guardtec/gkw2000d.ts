import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "GKW-2000D", name: "Name" },
          {
            text: "The GKW-2000D is a secure electronic door lock",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/037B:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "http://gkw2000d.thekeywe.com", name: "ProductPage" },
          {
            text: "https://mykeywe.thekeywe.com/Home/Login",
            name: "ProductSupport",
          },
          { text: "images/guardtec/gkw2000d.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2905/GKW-2000DZ-WaveManual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "press the [REG] button, enter the Master Pin (Default:1234) on the keypad followed by #88*",
            name: "InclusionDescription",
          },
          {
            text:
              "press the [REG] button, enter the Master Pin (Default:1234) on the keypad followed by #99*",
            name: "ExclusionDescription",
          },
          {
            text:
              "press the [REG] button, enter the Master Pin (Default:1234) on the keypad followed by #5*2*[Master Pin]#",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3060/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3062/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3030/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3064/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/2905/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3061/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3063/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3029/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/2993/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "Malaysia", id: "0001", name: "FrequencyName", type: "0002" },
          {
            text: "Singapore",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text: "South Korea",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Thailand", id: "0001", name: "FrequencyName", type: "0002" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Brazil", id: "0001", name: "FrequencyName", type: "0002" },
          { text: "Taiwan", id: "0001", name: "FrequencyName", type: "0002" },
          {
            text: "Australia / New Zealand",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Refresh lock status when alarm message received",
                author: "Brian Veltman - brian@brianveltman.com",
                date: "28 September 2019",
                revision: 2,
              },
              {
                text: "Initial Metadata import",
                author: "Brian Veltman - brian@brianveltman.com",
                date: "27 September 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                Index: "1",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              { index: "2", label: "Door Op", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
