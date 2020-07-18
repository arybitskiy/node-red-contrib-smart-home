import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:0002:8000",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zfm-80.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/660/",
            id: "0002",
            name: "ZWProductPage",
            type: "8000",
          },
          {
            text: "ZFM-80/ZDW-80/ZRW-80",
            id: "0002",
            name: "Identifier",
            type: "8000",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "8000",
          },
          {
            text: "http://www.remotec.com.hk/zaspx/support.aspx",
            name: "ProductSupport",
          },
          {
            text:
              "ZFM-80US .ZDW-80US Z-Wave Dimmer & ZRW-80US Z-Wave Wall Switch",
            name: "Description",
          },
          {
            text:
              "http://www.remotec.com.hk/zaspx/product_content.aspx?aboutno=37&subaboutno=37&main=t",
            name: "ProductPage",
          },
          { text: "ZFM-80, ZDW-80, ZRW-80 US Binary Switch", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/660/xml",
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
            label: "External switch action",
            size: "1",
            type: "list",
            value: "3",
            Help: "Set external switch type.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Type A: tact switch (normally open)", value: "1" },
              { label: "Type B: tact switch (normally closed)", value: "2" },
              { label: "Type C: rocker switch (short = on)", value: "3" },
              { label: "Type A: rocker switch (short = off)", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Fail-safe timeout",
            max: "240",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "0",
            Help: "Set timeout period.",
          },
          {
            genre: "config",
            index: "3",
            label: "Fail-safe command source node id",
            max: "232",
            min: "1",
            type: "byte",
            units: "Node ID number",
            value: "0",
            Help: "Configure Node ID number for Z-Wave command source.",
          },
          {
            genre: "config",
            index: "4",
            label: "Fail-safe timeout action",
            size: "1",
            type: "list",
            value: "0",
            Help: "Set relay output status if timeout period has been reached.",
            Item: [
              { label: "Turn off relay", value: "0" },
              { label: "Turn on relay", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Relay", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
