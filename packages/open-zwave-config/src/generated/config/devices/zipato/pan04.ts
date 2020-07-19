import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0131:0012:0001",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/pan04.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2421/",
            id: "0012",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "This  product  can  be  operated  in  any  Z-Wave  network  with  other Z-Wave certified devices from other manufacturers. All non-battery operated nodes within the network will act as repeaters regardless  of  vendor  to  increase  reliability  of  the  network. Micromodule Switch Double is a transceiver which is a Z-Wave Plus enabled  device  and  is  fully  compatible  with  any  Z-Wave  enabled network. Mini size design allow the module to be easily hidden into the wall box which is good for the house decoration. There are many kinds of application for using the module to switch AC power ON and OFF, one of which is the light control. The new smart relay calibration technology can reduce the inrush current caused by the load and let the module work perfectly with many kinds of light like incandescent, fluorescent and LED light. This Micromodule is able to detect Instant power wattage and overload wattage (current 7.5A) of connected light or appliances. When detecting overload state, the  switch  will  be  disabled  and  its  ON/OFF  button  will  be  locked during which LED will flash repeatedly. Unplugging and reconnecting the Module will reset its overload condition to normal status.",
            name: "Description",
          },
          {
            text:
              "Use this procedure only in the event that the network primary controller is lost or otherwise inoperable.\nPressing INCLUDE_BUTTON three times within 2 seconds will enter inclusion mode.\nWithin 1 second, press On/Off button again for 5 seconds until LED is off.\nIDs are excluded.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2421/ph-pan04 - Zipato MM Switch Double User Manual 165x295mm v1.5.pdf",
            name: "ProductManual",
          },
          { text: "ph-pan04.eu", id: "0012", name: "Identifier", type: "0001" },
          { text: "Micro Module Switch Double w.meter", name: "Name" },
          {
            text:
              "Have Z-Wave Controller entered inclusion mode by following the instructions provided by the controller manufacturer.\nPressing INCLUDE_BUTTON threetimes within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text:
              "Have Z-Wave Controller entered exclusion mode by following the instructions provided by the controller manufacturer.\nPressing INCLUDE_BUTTON three times within 2 seconds will enter exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0012",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2421/xml",
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
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Watt Meter Report Period",
            max: "32000",
            min: "1",
            type: "short",
            units: "5 seconds",
            value: "720",
            Help:
              "\n                If the setting is configured for 1hour (set value =720), Micromodule will report its instant power consumption every 1 hour to the node of correspond Group.\n                The maximum interval to report its instant power consumption is 45 hours (5s*32767/3600=45hr).",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "KWh Meter Report Period",
            max: "32000",
            min: "1",
            type: "short",
            units: "10 minutes",
            value: "6",
            Help:
              "\n                If the setting is configured for 1hour (set value =6), Micromodule will report its Accumulated Power Consumption (KW/h) every 1 hour to the node of correspond Group.\n                The maximum interval to report its Accumulated Power Consumption (KW/h) is 227.55 days (10min*32767/1440=227.55 days).",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Selected end point",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If Micromodule is not using Multi_Channel command class to access the relay of Switch, you may configure the select value to react the Basic Command Class, Binary Switch Command Class or Meter Command Class V3.",
            Item: [
              { label: "Relay 1 and Relay 2", value: "1" },
              { label: "Relay 1", value: "2" },
              { label: "Relay 2", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "External switch operating mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Manual switch S1 and S2 can set to Edge mode or Pulse mode or Edge-Toggle mode, default value is Edge mode.\n            1) Edge : This mode is suitable for the bi stable wall switch that has indicator point on the Micromodule, and the same position correspond to same state of relay1 and relay2. if the Switchs relay changes the state because of receiving Z-Wave RF command, it may need two switchings (switch on to off or switch off to on) to let relay back to the corresponding state.\n            2) Pulse : this mode is suitable for the toggle type wall switch to swap the state of Relay1 or Relay2.\n            3) Edge-Toggle : This mode is suitable for the normal bi-stable switch, every state change of the wall switch will also swap the state of Relay1 or Relay2.",
            Item: [
              { label: "Edge", value: "1" },
              { label: "Pulse", value: "2" },
              { label: "Edge/Toggle", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Threshold of Watt for Load Caution",
            max: "750",
            min: "10",
            type: "short",
            units: "0.01A",
            value: "750",
            Help:
              "This is a warning when the wattage of load over the preset threshold value, If the setting value is 750, when the load wattage of Relay1 or Relay2 over this value, Micromodule will send Watt Meter Report command to the node of correspond Group, the Range of the setting value is from 10 to 750, and the default value is 750.",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Threshold of kWh for Load Caution",
            max: "1000",
            min: "10",
            type: "short",
            units: "1KWh",
            value: "750",
            Help:
              "This is a warning when the KWh of load exceeds preset threshold value, If the setting value is 1000, when the Accumulated Power Consumption of Relay1 or Relay2 exceeds this value, Micromodule will send KWh Meter Report command to the node of corresponding Group, the Range of the setting value is from 10 to 1000, and the default value is 750.",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Restore switch state mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Whenever the AC power return from lost, Micromodule will restore the switch state which could be",
            Item: [
              { label: "Switch off", value: "1" },
              { label: "Last switch state", value: "2" },
              { label: "Switch on", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Auto off timer",
            max: "32767",
            min: "0",
            type: "short",
            units: "second",
            value: "0",
            Help:
              "\n                Whenever Micromodule switches to on, the auto off timer begin to count down.\n                After the timer decrease to zero, it will switch off automatically.\n                However if Auto off timer is set as 0, the auto off function will be disabled.\n                The default setting is 0.\n            ",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "RF off command mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                 Whenever a switch off command, BASIC_SET, BINARY_SWITCH_SET, SWITCH_ALL_OFF, is received, it could be interpreted as 4 kinds of commands.\n             ",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch toogle", value: "2" },
              { label: "Switch on", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Existence of Endpoint3",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                 Multi-Channel Command is a good way to control relay1 and relay2 of Switch individually.\n                 The endpoint3 of Micromodule is related to both relay1 and relay2.\n                 In some condition it becomes redundant in Multi-Channel Command Class.\n                 When the Existence of Endpoint3 is set as 2, the endpoint3 will be disabled.\n                 The default value is 1.\n                 Endpoint1 and Endpoint2 are fixed, only Endpoint3 is dynamic.\n             ",
            Item: [
              { label: "Endpoint 3 exist", value: "1" },
              { label: "No Endpoint 3", value: "2" },
            ],
          },
        ],
      },
      { action: "remove", id: "113" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                label: "Relay 1 and 2 together",
                max_associations: "1",
              },
              { index: "2", label: "Relay 1", max_associations: "1" },
              { index: "3", label: "Relay 2", max_associations: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
