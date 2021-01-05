import assert from "assert";

export class APlaceUnitEvent {
    discarded_cards: Array<number>
    selected_card: number
    selected_column: number
    selected_row: number


    constructor(event: APlaceUnitEvent) {
        assert.notStrictEqual(event.discarded_cards, undefined)
        this.discarded_cards = event.discarded_cards
        assert.notStrictEqual(event.selected_card, undefined)
        this.selected_card = event.selected_card
        assert.notStrictEqual(event.selected_column, undefined)
        this.selected_column = event.selected_column
        assert.notStrictEqual(event.selected_row, undefined)
        this.selected_row = event.selected_row
    }

}

export default class PlaceUnitEvent extends APlaceUnitEvent {
    kind: "PlaceUnitEvent" = "PlaceUnitEvent"
}
