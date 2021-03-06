import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:1020:0102",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tz66d.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/45/",
            id: "1020",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "The TKB Z-Wave dual wall switch is switching attached loads and is controlled either by the local switching paddle or remotely via the Z-Wave wireless protocol\nIt is included and controlled in a Z-Wave network by a remote control, a wireless control centre or any other kind of Z-Wave controller including a PC-software.\nBeside the local switch the unit can control other Z-Wave units remotely in up to three additional Z-Wave groups, which are associated with this device. Tipping one time or two times the switching paddle performs the control. The left paddle controls the local load while the right paddle remotely controls Z-Wave associated devices only. The association of further Z-Wave devices needs to be done by a Z-Wave controller. The unit is powered by 230V power and needs a pattress box with 230 V power wires for installation. The unit is shipped completely with electronics, switching paddle and mounting frame in white style. It is designed for use within a 3-wire system, which means that a neutral wire is needed for operations.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "1020",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text: "http://www.tkbhome.com/guestbook.php",
            name: "ProductSupport",
          },
          {
            text: "http://www.tkbhome.com/?cn-p-d-170.html",
            name: "ProductPage",
          },
          { text: "TZ66D", id: "1020", name: "Identifier", type: "0102" },
          { text: "Z-Wave Dual Wall Switch", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/45/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "Set Ignore start level bit when transmitting dim commands",
            max: "1",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "If the bit is set to 1, the dimmer will ignore the start level and instead start dimming from its current level. If this bit is set to 0, the dimmer will not ignore the start level.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Disable transmitting to group 4",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Setting this parameter to the value of 1 will stop the TZ66D from transmitting to devices that are associated into Group 4.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Night light",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The LED on the TZ66D will by default, turn ON when the load attached is turned OFF. To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 1.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Invert switch",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "To change the top of the switch to OFF and the bottom of the switch ON , set parameter 4 to 1.",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Enable shade control Group 2",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The TZ66D can operate shade control devices via its Group 2 if this configuration parameter is set to 1.",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Enable shade control Group 3",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The TZ66D can operate shade control devices via its Group 3 if this configuration parameter is set to 1.",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "LED Transmission indication",
            max: "2",
            min: "0",
            type: "byte",
            value: "2",
            Help:
              "The TZ66-D will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all (set to 0), to flicker the entire time it is transmitting (set to 1), or to flicker for only 1 second when it begins transmitting (set to 2). By default, the TZ66D is set to flicker for only 1 second.",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Poll Group 2 Interval (minutes)",
            max: "255",
            min: "1",
            type: "byte",
            value: "2",
            Help:
              "Defines the poll interval in minutes for group 2 if polling is activated.",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Poll Group 2",
            max: "1",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "If value is 0, the TZ66D will not poll Group 2. If value is 1, the TZ66D will poll Group 2 at the interval set in Configuration Parameter 20.",
          },
        ],
      },
    ],
  },
};

export default config;
