import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:003E:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw062.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1445/",
            id: "003E",
            name: "ZWProductPage",
            type: "0103",
          },
          { text: "Garage Door Controller Gen5", name: "Name" },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Z-Wave button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Z-Wave button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold the Z-Wave button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Aeon Labs Garage Door Controller is a smart and wireless Garage Door Control system, you can control the garage door to open, close, or stop moving via wireless signal on your gateway client or phone application.\nThe Garage Door Controller allows you to configure different alarm sounds to indicate the door’s action. Each action alarm sound can be customized. To change or update new alarm sounds for the Garage Door Controller, connect the Garage Door Controller to your PC host with a USB cable and download your sound files to the flash memory (128 MB) of the Garage Door Controller.\nIt can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network. \nIt is also a security Z-Wave device and supports the Over The Air (OTA) feature for the product’s firmware upgrade.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1497/Aeon Labs Garage Door Controller Gen5 manual.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "003E",
            name: "FrequencyName",
            type: "0103",
          },
          { text: "ZW062-A", id: "003E", name: "Identifier", type: "0103" },
          {
            text: "https://products.z-wavealliance.org/products/1496/",
            id: "003E",
            name: "ZWProductPage",
            type: "0203",
          },
          { text: "ZW062-B", id: "003E", name: "Identifier", type: "0203" },
          {
            text: "Australia / New Zealand",
            id: "003E",
            name: "FrequencyName",
            type: "0203",
          },
          {
            text: "https://products.z-wavealliance.org/products/1497/",
            id: "003E",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "ZW062-C", id: "003E", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "003E",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1445/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1496/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1497/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 7,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Startup ringtone",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "\n\t\t\tConfigure the default startup ringtone.\n\t\t\tValue = 0, disable the Startup ringtone.\n\t\t\tValue = Others, Enable and select a startup ringtone for the Garage Door Controller\n\t\t\t",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Sensor Calibration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Help:
              "\n\t\t\tCalibration Steps:\n\t\t\t1. Let the garage door move to full close position.\n\t\t\t2. Send this parameter (0x22) with value=1 to Garage Door Controller.\n\t\t\t3. Let the garage door move to full open position.\n\t\t\t4. Let the garage door move to full close position after the step 3 is completed.\n\t\t\tAfter the step 4 is completed, all calibration steps are complete.\n\t\t\tNote: This process should be implemented when the Garage Door Controller just only has one Sensor is installed on the garage door.\n\t\t\t",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Do calibration", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "Timeout of calibration steps",
            max: "65000",
            min: "0",
            type: "short",
            value: "30",
            Help: "Set the timeout of all calibration steps for the Sensor",
          },
          {
            genre: "config",
            index: "36",
            instance: "1",
            label: "Get the numbers of alarm music",
            read_only: "true",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "\n\t\t\t\tGet the numbers of alarm music. (not support Set CC)\n\t\t\t",
          },
          {
            genre: "config",
            index: "37",
            instance: "1",
            label:
              "Configure the alarm mode for when the garage door is opening",
            size: "4",
            type: "int",
            value: "167905281",
            Help:
              "\n                1, Value1: configure the frequency of blinking for the Alarm LEd, there are 10 levels that 1 to10 level, the minimum frequency is level 1 and the max frequency is level 10.\n\t\t\t\t2, Value2: configure the alarm sound (there are 4 types sound saved in EEPROM and user also can update it).\n\t\t\t\t3, Value3: configure the volume of alarm sound (there are 10 levels, the min volume is 1 level and the max volume is 10 levels).\n\t\t\t\t4, Value4=0, disable the alarm prompt. Value4=1, enable the alarm prompt.\n                value is sum:\n                16777216 x led_frequency\n                + 65536 x alarm_sound\n                + 256 x volume\n                + 1 x alarm_mode\n            ",
          },
          {
            genre: "config",
            index: "38",
            instance: "1",
            label: "Configure the alarm mode when the garage door is closing",
            size: "4",
            type: "int",
            value: "134416385",
            Help:
              "\n                1, Value1: configure the frequency of blinking for the Alarm LED, there are 10 levels that 1 to10 level, the minimum frequency is level 1 and the max frequency is level 10.\n\t\t\t\t2, Value2: configure the alarm sound (there are 4 types sound saved in EEPROM and user also can update it).\n\t\t\t\t3, Value3: configure the volume of alarm sound (there are 10 levels, the min volume is 1 level and the max volume is 10 levels).\n\t\t\t\t4, Value4=0, disable the alarm prompt. Value4=1, enable the alarm prompt.\n                value is sum:\n                16777216 x led_frequency\n                + 65536 x alarm_sound\n                + 256 x volume\n                + 1 x alarm_mode\n            ",
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label:
              "Configuration alarm mode when the garage door is in unknown state",
            size: "4",
            type: "int",
            value: "100927488",
            Help:
              "\n                1, Value1: configure the frequency of blinking for the Alarm LED, there are 10 levels that 1 to10 level, the minimum frequency is level 1 and the max frequency is level 10.\n\t\t\t\t2, Value2: configure the alarm sound (there are 4 types sound saved in EEPROM and user also can update it).\n\t\t\t\t3, Value3: configure the volume of alarm sound (there are 10 levels, the min volume is 1 level and the max volume is 10 levels).\n\t\t\t\t4, Value4=0, disable the alarm prompt. Value4=1, enable the alarm prompt.\n                value is sum:\n                16777216 x led_frequency\n                + 65536 x alarm_sound\n                + 256 x volume\n                + 1 x alarm_mode\n            ",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label:
              "Configure the alarm mode when the garage door is in closed position",
            size: "4",
            type: "int",
            value: "33883392",
            Help:
              "\n                1, Value1: configure the frequency of blinking for the Alarm LED, there are 10 levels that 1 to10 level, the minimum frequency is level 1 and the max frequency is level 10.\n\t\t\t\t2, Value2: configure the alarm sound (there are 4 types sound saved in EEPROM and user also can update it).\n\t\t\t\t3, Value3: configure the volume of alarm sound (there are 10 levels, the min volume is 1 level and the max volume is 10 levels).\n\t\t\t\t4, Value4=0, disable the alarm prompt. Value4=1, enable the alarm prompt.\n                value is sum:\n                16777216 x led_frequency\n\t\t\t\t+ 65536 x alarm_sound\n\t\t\t\t+ 256 x volume\n\t\t\t\t+ 1 x alarm_mode\n            ",
          },
          {
            genre: "config",
            index: "41",
            label: "Configuration report for the tamper switch State",
            size: "4",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tNote:\n\t\t\t1. The Garage Door Controller will send this configuration report to gateway controller or associated nodes automatically if the Sensor is removed.\n\t\t\t2. You can send the value=0x55555555 of this parameter to controller to relieve the alarm state.\n\t\t\t",
            Item: [
              { label: "Sensor is not removed", value: "0" },
              { label: "Sensor is removed", value: "15" },
              { label: "Relieve the alarm state", value: "1431655765" },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "Configuration report for the battery state of Sensor",
            max: "15",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "It will report the battery power state to associated nodes automatically when the battery power is in low battery.",
            Item: [
              { label: "Battery power is much more", value: "0" },
              {
                label: "Battery power of Sensor is in low battery",
                value: "15",
              },
            ],
          },
          {
            genre: "config",
            index: "43",
            label: "Start playing or Stop playing the ringtone",
            max: "100",
            min: "0",
            type: "byte",
            value: "0",
            write_only: "true",
            Help:
              "\n\t\t\tValue=0xff, stop playing ringtone.\n\t\t\tValue=1 to 100, start playing the ringtone that you selected.\n\t\t\t",
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Test the volume of the current ringtone",
            max: "10",
            min: "1",
            read_only: "true",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "\n\t\t\t\tValue=1 to value=10, which map to the volume level 1 to level 10\n\t\t\t",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Get the environment temperature",
            max: "500",
            min: "0",
            read_only: "true",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tThe temperature value contains one decimal point.\n\t\t\t\tE.g. If the report value=252(0x00FC), the temperature is 25.2.\n\t\t\t\tRang is 0 to 500 (0 to 50.0).\n\t\t\t",
          },
          {
            genre: "config",
            index: "47",
            label: "Define the function of Button- or Button+",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tValue=0, short pressing the Button +/- will be used to adjust the volume of sound. Long pressing the Button +/- will be used to switch the sound to the next.\n\t\t\tValue=1, short pressing the Button +/- will be used to switch the sound to the next. Long pressing the Button +/- will be used to adjust the volume of sound.\n\t\t\t",
            Item: [
              { label: "Volume", value: "0" },
              { label: "Sound", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Report type when the state of garage door is changed",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "It will send the Hail CC/configuration report CC when the state of garage door is changed",
            Item: [
              { label: "Reserved", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Barrier operator", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "241",
            label: "Pair the Sensor with Garage Door Controller",
            size: "4",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tValue=0x55555501, which will trigger to start the pairing of Sensor (installed on the top of the garage door), at this time, the Network LED on the Garage Door Controller will blink slowly and then short press Temper Switch back of the Sensor.\n\t\t\tIf pairing is successful, the Network LED will stop blinking and the Garage Door Controller will send the configuration report with value=0x01FF to primary controller/gateway. Otherwise, repeat the operation.\n\t\t\tNote:\n\t\t\t1. If you do not press the Temper Switch when starting the pairing mode, the pairing status will keep for 8 second and then exit the pairing status automatically.\n\t\t\t2. The Sensor has been paired with the Garage Door Controller after factory.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Start the pairing of Sensor", value: "1431655681" },
              { label: "Pairing is successful", value: "511" },
            ],
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
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Retransmit Switch CC",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
