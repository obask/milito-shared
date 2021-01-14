class ACardDTO {

    id?: number
    unitType: string

    constructor(props: ACardDTO) {
        this.id = props.id
        this.unitType = props.unitType
    }
}

export default class CardDTO extends ACardDTO {
    isSelected: boolean

    constructor(props: ACardDTO & {isSelected?: boolean}) {
        super(props)
        this.isSelected = props.isSelected ?? false
    }

}
