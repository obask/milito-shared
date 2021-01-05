export class AInitiateAttackEvent {
    bonus_card_id?: number
    selected_column: number
    selected_row: number


    constructor(event: AInitiateAttackEvent) {
        this.bonus_card_id = event.bonus_card_id
        this.selected_column = event.selected_column
        this.selected_row = event.selected_row
    }

}

export default class InitiateAttackEvent extends AInitiateAttackEvent {
    kind: "InitiateAttackEvent" = "InitiateAttackEvent"
}
