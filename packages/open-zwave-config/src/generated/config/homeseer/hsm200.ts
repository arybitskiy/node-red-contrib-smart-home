import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001E:0001:0004",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hsm200.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2794/",
            id: "0001",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2794/EZMultiPliOwnerManual.pdf",
            name: "ProductManual",
          },
          { text: "EZmultiPli", name: "Name" },
          {
            text:
              "When EZMultiPli is first plugged into the wall outlet, the LED should blink an aqua color. This indicates that it is not currently joined (or paired) to a Z-Wave network. If the LED is blinking white each time motion is detected, then it is already joined to a Z-Wave network. If the LED is blinking white you will need to exclude it from the other Z-Wave network before attempting to join a new one.\nFollow the procedure of the Z-Wave primary controller to begin the exclusion process. Once the primary controller is ready to receive the exclusion command, press and release the push button on the side of EZMultiPli. The primary controller should give an indication that the reset process has completed. EZMultiPlis LED will blink aqua when it is ready to be added to a Z-Wave network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "SmartStart or press and release the button on the side.\nLED blinks slowly light blue when not included.\nOnce included, the LED blinks white when motion is detected for about 5 minutes to test the motion detection area.",
            name: "InclusionDescription",
          },
          {
            text:
              "Factory Reset\nIf the exclusion process above is not working or the controller EZMultiPli was originally joined to is lost or not available, the following process can be used to factory reset EZMultiPli.\n\nPress and continue to hold the push button in for about 60 seconds. The LED will blink blue faster and faster and then shift to yellow and continue to blink faster and faster. Once the LED goes out, EZMultiPli is reset to the factory defaults and will blink aqua indicating it is ready to be added to a Z-Wave network.",
            name: "ResetDescription",
          },
          { text: "EZMultiPli", id: "0001", name: "Identifier", type: "0004" },
          {
            text:
              "Notify caregivers when a loved one does not get up at their usual time or gets up multiple times during the night. Easily installed in a kitchen, bathroom, bedroom or hallway - just plug it in! The wide angle motion sensor detects motion when placed at floor level in a normal wall outlet or at counter height in a kitchen or bath. Never needs batteries!\n\nReceive an email or text when motion is detected or the temperature is dangerously low while you are away.  Turn on lights and sirens automatically.\n\nSave energy by automatically turning off lights in unoccupied rooms or hallways.\n\nSet the color LED night light to inform you that your garage door is open, there is a severe weather alert or any indicator you can imagine!\n\nOperates as a Z-Wave range extender utilizing fifth generation Z-Wave technology to enhance the reliability and speed of every device on a Z-Wave network. \n\nVersion 2.0 firmware adds AES-128 security S2 and SmartStart",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "http://store.homeseer.com/store/X-P1882.aspx",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1124/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1254/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2794/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "0",
            label: "Unidentified Parameter",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "\n\t\t\t\tParameter #0 is undocumented: let us know if you know what it does!\n\t\t\t\tAttributes (type, units, min and max) are wild guesses, except default value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "1",
            label: "On Time",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "20",
            Help:
              "\n\t\t\t\tOn Time sets the number of minutes that the lights stay on when\n\t\t\t\tmotion has not been detected.\n\t\t\t\tA value of 0 On Time is a special mode where the lights are\n\t\t\t\tconstantly sent a command to turn them on whenever motion is\n\t\t\t\tdetected. The device will NOT turn the lights off in this mode.\n\t\t\t\tNote that this mode will significantly shorten battery life.\n\t\t\t\tRecommended values:\n\t\t\t\t5 min for hallways.\n\t\t\t\t20 min for an office environment.\n\t\t\t\t60 min for a library or other room where someone may be sitting\n\t\t\t\tstill for a long time.\n\t\t\t\tThis may be inaccurate, but default for Homeseer HSM100 may actually be 3 minutes, instead of 20?\t\t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "On Level",
            max: "99",
            min: "-1",
            type: "byte",
            value: "99",
            Help:
              "\n\t\t\t\tOnLevel is the value sent by the Z-Wave BASIC_SET command to all Association Group 2 nodes when motion is detected. \n\t\t\t\tA value of 0 will turn the lights off (not recommended).\n\t\t\t\tA value between 1 and 99 will set the dim level to between 1% and 99% (99% is full on).\n\t\t\t\tA value of -1 will turn the light on which depends on the device but most will set the dim level to the last dim setting.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Lite Minutes",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "\n\t\t\t\tLiteMinutes. A Luminance report is sent to the system controller every LiteMin minutes.\n\t\t\t\tA value of zero turns this mode off. Luminance values can still be obtained at any time by the home control application in this mode.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Temp Minutes",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "\n\t\t\t\tTempMinutes. A Temperature report is sent to the controller every TempMin minutes.\n\t\t\t\tA value of zero turns this mode off. Temperature values can still be obtained at any time by polling the status of the temperature sensor.\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Temp Adj",
            max: "127",
            min: "-128",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tTempAdj. TempAdj is a twos-complement number that is used to adjust the temperature reading to make it more accurate. The value is in tenths of degree Fahrenheit. The temperature reading can be adjusted by +12.7F to -12.8F. A value of 1 will adjust the temperature reading by +0.1F. A value of -1 will adjust the temperature by -0.1F. A value of 123 will adjust the temperature by +12.3F.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                index: "1",
                label: "Motion Notification",
                max_associations: "1",
              },
              {
                auto: "true",
                index: "2",
                label: "Motion Control",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
