import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0205:0343",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/ssa3.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/931/",
            id: "0205",
            name: "ZWProductPage",
            type: "0343",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0205",
            name: "FrequencyName",
            type: "0343",
          },
          {
            text:
              "http://fortrezz.com/index.php/products/siren/itemlist/category/18-siren-strobe-alarm-wire-wireless",
            name: "ProductPage",
          },
          { text: "Siren & Strobe Alarm", name: "Name" },
          { text: "SSA3-P4", id: "0205", name: "Identifier", type: "0343" },
          {
            text:
              "Siren Strobe Alarm SSA3 by FortrezZ, is a professional grade, with both wire and wireless triggers to be used as an alarm device for home security or home automation.\n\nSSA3 can be connected and triggered the traditional way, by wire, from the home security panel, or by wire from the security loop and also to be used wireless on the Z-Wave network.  SSA3 can be used indoor and/or outdoors and will sound a loud siren and flash a strobe light when an alarm message or alert is received on the Z-Wave network.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/931/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
            label: "Delay before accept of Basic Set Off",
            max: "255",
            min: "0",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t\t\tDelay, from the time the siren-strobe turns on, before the Basic Set Off command is accepted;\n\t\t\t\t1 Byte (in seconds, default is 0, interpreted as unsigned integer for negative values sent in set command).\n\t\t\t\tThis could be used, for example, to avoid the situation where an associated window/door sensor turns the SSA3 alarm on and immediately off when the window/door is opened and then quickly closed\n\t\t\t",
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
                auto: "false",
                index: "1",
                label: "Tamper Alarm",
                max_associations: "2",
              },
              {
                index: "2",
                label: "Main power has dropped",
                max_associations: "2",
              },
              {
                index: "3",
                label: "Security panel trigger is active",
                max_associations: "2",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
