import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0149:0504:1214",
            name: "OzwInfoPage",
          },
          { text: "images/widom/WDS.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1569/",
            id: "0504",
            name: "ZWProductPage",
            type: "1214",
          },
          { text: "0504", id: "0504", name: "Identifier", type: "1214" },
          {
            text:
              "Only a controller can remove a device from the network. WiDom Universal Double Switch is compatible with all Z-Wave certified controllers. After the exclusion procedure has been activated by the controller, the device can be removed, putting it in Exclusion Mode by three consecutive clicks on the (B) button or on the external switch, when available.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The device can be reset ot the factory reset by six consecutive clicks. This procedure shuld be used only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "If the device is not included into a Z-Wave network, a single click on the (B) button or on one of the external switches will launch the process of traditional inclusion. If the device inclusion procedure does not start within 2 seconds, the Network Wide Inclusion network will be launched lasting a variable amount of time between 15-30 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "Universal Double Switch is the ON/OFF smallest control device in the world designed to independently control two separate loads, suited for use as both a local and remote switch. Similarly to the other WiDom “in wall” devices, it can be fully integrated into pre-existing systems and configured to associate configurable behaviours to a specific number of clicks, in full integration with the Z-Wave home automation ecosystem.\nEach of its two channels features an integrated consumption measurement device. The Universal Double Switch also boasts the lowest energy consumption on the market.\nAt the same time, it is completely configurable so that it can adapt to the most varied needs while also being ready to be used without needing additional configurations in order to operate.\nThanks to the framework developed by WiDom, the various types of “events” on the “External Switch” can be recognised and associated to actions to be performed on the device, on any associated devices, on all devices on the network.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0504",
            name: "FrequencyName",
            type: "1214",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1569/Widom Double Relay_EN.pdf",
            name: "ProductManual",
          },
          { text: "WDS", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1569/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
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
            instance: "1",
            label: "Outputs status upon receipt of 1 click on its command",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines the status of the output O1/O2 when the switch connected to I1/I2 receives 1 Click",
            Item: [
              { label: "In Out", value: "0" },
              { label: "Toggle", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Outputs status upon receipt of 2 click on its command",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines the status of the output O1/O2 when the switch connected to I1/I2 receives 2 Click",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Type of outputs",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                Defines if the outputs are controlled individually, as a traditional device with two channels, or if its behaviour simulates a single pole double throw relay.\n                0 - SINGLE CHANNELS (Default Value) => Channel 1 and Channel 2 are controlled individually.\n                From 1 to 9 - SINGLE POLE DOUBLE THROW RELAY => The two channels are in opposite status. If the Channel 1 is close the Channel 2 is open, if the Channel 1 is open the Channel 2 is close. The value of the parameter defines the closing delay of the relay in tenth of seconds\n                From 10 to 19 - SEQUENCING RELAY => Channels are toggled in this way: both channels ON, only channel 1 ON, only channel 2 ON, both channels OFF. The value of the parameter, deducted of 9, defines the closing delay of the relay in tenth of seconds.\n                From 20 to 39 - SELECTOR => Both channels can be OFF but they can never be ON simultaneously. It can be used for fan coil control, roller shutters, and in general for two-speed systems. The value of the parameter, deducted of 19, defines the closing delay of the relay in tenth of seconds.\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label:
              "Number of clicks that activate the control of the associated devices",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter allows to choose operating for the 1st channel controlled by the S1 switch.",
            Item: [
              { label: "1 Click", value: "1" },
              { label: "2 Clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label:
              "Level used to control the devices associated to group 2 and 3",
            size: "1",
            type: "byte",
            value: "100",
            Help:
              "\n                0 - SWITCH_OFF The associated devices are switched OFF.\n                -1 - SWITCH_ON The associated devices are switched ON.\n                From 1 to 99 The associated devices (dimmer, roller shutters) are set to the indicated level (only for devices associated to group 3).\n                100 - RELAY_STATUS (Default Value) If the Relay 1 is ON/OFF, the associated devices are ON/OFF.\n                101 - RELAY_STATUS_BUT_IGNORE_IF_OFF If the Relay 1 is ON the associated devices are ON; if it is OFF no action is taken on the associated devices.\n                102 - RELAY_STATUS_BUT_IGNORE_IF_ON If the Relay 1 is OFF the associated devices are OFF; if it is ON no action is taken on the associated devices.\n                103 - RELAY_OPPOSITE_BUT_IGNORE_IF_OFF If the Relay 1 is ON the associated devices are OFF; if it is OFF no action is taken on the associated devices.\n                104 - RELAY_OPPOSITE_BUT_IGNORE_IF_ON If the Relay 1 is OFF the associated devices are ON; if it is ON no action is taken on the associated devices.\n                105 - RELAY_OPPOSITE If the Relay 1 is ON/OFF, the associated devices are OFF/ON.\n                106 - IGNORE No action is taken on the associated devices.\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label:
              "Level used to control the devices associated to group 4 and 5",
            size: "1",
            type: "byte",
            value: "100",
            Help:
              "\n                0 - SWITCH_OFF The associated devices are switched OFF.\n                -1 - SWITCH_ON The associated devices are switched ON.\n                From 1 to 99 The associated devices (dimmer, roller shutters) are set to the indicated level (only for devices associated to group 5).\n                100 - RELAY_STATUS (Default Value) If the Relay 2 is ON/OFF, the associated devices are ON/OFF.\n                101 - RELAY_STATUS_BUT_IGNORE_IF_OFF If the Relay 2 is ON the associated devices are ON; if it is OFF no action is taken on the associated devices.\n                102 - RELAY_STATUS_BUT_IGNORE_IF_ON If the Relay 2 is OFF the associated devices are OFF; if it is ON no action is taken on the associated devices.\n                103 - RELAY_OPPOSITE_BUT_IGNORE_IF_OFF If the Relay 2 is ON the associated devices are OFF; if it is OFF no action is taken on the associated devices.\n                104 - RELAY_OPPOSITE_BUT_IGNORE_IF_ON If the Relay 2 is OFF the associated devices are ON; if it is ON no action is taken on the associated devices.\n                105 - RELAY_OPPOSITE If the Relay 2 is ON/OFF, the associated devices are OFF/ON.\n                106 - IGNORE No action is taken on the associated devices.\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Timer to switch OFF the Channel 1",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Defines the time after which the Channel 1 is switched OFF.\n                0 (Default Value) Timer disabled.\n                From 1 to 32000 (seconds) After this time the relay of the Channel 1 is OFF.\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Timer to switch OFF the Channel 2",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Defines the time after which the Channel 2 is switched OFF.\n                0 (Default Value) Timer disabled.\n                From 1 to 32000 (seconds) After this time the relay of the Channel 1 is OFF.\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Timer to switch ON the Channel 1",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Defines the time after which the Channel 1 is switched ON.\n                0 (Default Value) Timer disabled.\n                From 1 to 32000 (seconds) After this time the relay of the Channel 1 is ON.\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Timer to switch ON the Channel 2",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Defines the time after which the Channel 2 is switched ON.\n                0 (Default Value) Timer disabled.\n                From 1 to 32000 (seconds) After this time the relay of the Channel 1 is ON.\n            ",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label:
              "Outputs status upon receipt of a Multi-Channel Basic Set command",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "The two channels can be controlled individually by Z-Wave network.\n                The status of the channels upon receipt of a Multi-Channel Basic Set command is defined by the value set on the parameter.\n            ",
            Item: [
              { label: "As Received", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Outputs status upon receipt of a Basic Set command",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "The channels of the device can be controlled individually from all other Z-Wave devices that support the multichannel feature.\n                In order to support also the integration with no-multichannel systems, this parameter allows to define if the receipt of a no-multichannel command controls only the Channel 1 or both.\n            ",
            Item: [
              { label: "Channel 1", value: "1" },
              { label: "Both Channels", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Start-up status",
            size: "1",
            type: "list",
            value: "4",
            Help: "Defines the status of the device following a restart.",
            Item: [
              { label: "Off Off", value: "0" },
              { label: "On Off", value: "1" },
              { label: "Off On", value: "2" },
              { label: "On On", value: "3" },
              { label: "Previous status", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Configuration reset",
            size: "1",
            type: "list",
            value: "4",
            Help: "Defines which parameters should be reset to default values.",
            Item: [
              { label: "Factory Reset", value: "0" },
              { label: "Association Reset", value: "1" },
              { label: "Configuration Reset", value: "2" },
              { label: "Restart Device", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "62",
            instance: "1",
            label: "Type of external switch",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines the type of external switch connected to the device.",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "Momentary switch", value: "1" },
              { label: "Toggle switch", value: "2" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "On/Off S1", max_associations: "8" },
              { index: "3", label: "Dimmer S1", max_associations: "8" },
              { index: "4", label: "On/Off S2", max_associations: "8" },
              { index: "5", label: "Dimmer S2", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
