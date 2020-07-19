import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0107:0313",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/ssa2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/130/",
            id: "0107",
            name: "ZWProductPage",
            type: "0313",
          },
          { text: "http://www.fortrezz.com/", name: "ProductSupport" },
          { text: "FortrezZ SSA1/SSA2 Siren & Strobe Alarm", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0107",
            name: "FrequencyName",
            type: "0313",
          },
          {
            text:
              "The SSA1 / SSA2 is a Z-Wave enabled device that will sound a loud siren and/or flash a strobe light when signaled via a Z-Wave enabled network. SSA1: clear lens version; SSA2: red lens version.Integrate it into the home automation and/ or security network, and this siren/strobe module will deliver the audible and visual notifications you can depend on.\n- SSA will sound a loud audible alarm >110dB@1m and a strobe lighting when an alarm signal is received from a device in the Z-Wave home network. \n- Intended for use inside a Z-Wave Home Automation network as a Siren / Strobe Light Alarm.\n\n- Can be used in a normal, existing home’s security system with wired controllers, using  Z-Wave to RS-232/485 bridge.\n\n- Extends the range of existing Z-Wave devices in the mesh network by acting as a signal repeater.\n\n- Uses the latest and most successful wireless home automation technology.\n\n- Tamper proof.  Uses 9V batter backup to sound alarm if AC power is disconnected / cut.\n- SSA is fully programmable with Z-wave smart controllers to provide the audible and visual notifications you set for your automation and/or security network.\n\n    - Siren ONLY mode\n\n    - Strobe ONLY mode\n\n    - Strobe & Siren Mode",
            name: "Description",
          },
          {
            text: "SSA1 - SSA2 01",
            id: "0107",
            name: "Identifier",
            type: "0313",
          },
          { text: "http://www.fortrezz.com/", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/130/xml",
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
              "\n\t\t\t\tDelay, from the time the siren-strobe turns on, before the Basic Set Off command is accepted.\n\t\t\t\tThis could be used, for example, to avoid the situation where an associated window/door sensor turns the SSA1 alarm on and then immediately off when the window/door is opened and then quickly closed.\n\t\t\t\t-128 seconds to -1 seconds -> Interpreted as unsigned integer for negative values sent in set command.\n\t\t\t",
          },
        ],
      },
    ],
  },
};

export default config;
