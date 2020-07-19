import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0109:0023",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/wwa02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/91/",
            id: "0109",
            name: "ZWProductPage",
            type: "0023",
          },
          { text: "http://www.fortrezz.com/", name: "ProductPage" },
          { text: "http://www.fortrezz.com/", name: "ProductSupport" },
          { text: "WWA-02 - Wireless Water & Temperature Alarm", name: "Name" },
          {
            text:
              "Wireless Water Alarm WWA-02AA. This product will provide you with peace of mind and the protection you expect. Water damages are caused by leaking pipes, corroded water heaters, water storage tanks, fixtures in bathrooms, laundry rooms, refrigerator drip pans etc.\n\n•Wireless Water Alarm WWA-02AA is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Inclusion of this WWA-02AA into a Z-WaveTM network allows remote status monitoring and alerts when the detector is triggered. Other Z-Wave nodes in the system also act as repeaters if they support that function.",
            name: "Description",
          },
          { text: "WWA-02", id: "0109", name: "Identifier", type: "0023" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0109",
            name: "FrequencyName",
            type: "0023",
          },
          {
            text: "https://products.z-wavealliance.org/products/92/",
            id: "010A",
            name: "ZWProductPage",
            type: "0021",
          },
          {
            text: "CEPT (Europe)",
            id: "010A",
            name: "FrequencyName",
            type: "0021",
          },
          { text: "WWA-02", id: "010A", name: "Identifier", type: "0021" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/91/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/92/xml",
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
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Low Temperature Trigger Point",
            max: "255",
            min: "0",
            type: "byte",
            units: "degrees",
            value: "4",
            Help: "",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "High Temperature Trigger Point",
            max: "255",
            min: "0",
            type: "byte",
            units: "degrees",
            value: "70",
            Help: "",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                label: "Water Alarm or Heat Alarm",
                max_associations: "2",
              },
              { index: "2", label: "Water Alarm", max_associations: "2" },
              { index: "3", label: "Temperature Alarm", max_associations: "2" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
