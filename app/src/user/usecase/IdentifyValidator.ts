import { IdentifyStructure } from '@app/user/entity/Identify'

export class IdentifyValidator {
  public validate (platform: IdentifyStructure): IdentifyStructure {
    return {
      method: this.validateCode(platform.method),
      currency: this.validateCurrency(platform.currency),
      country: this.validateCountry(platform.country)
    }
  }
  private validateCode (code: string): string {
    if (!code || (code.length > 100)) throw new Error('invalid_platform_code')
    return code
  }
  private validateCurrency (currency: string): string {
    const pattern = new RegExp(/^([A-Z]{3})$/)
    if (!pattern.test(currency)) throw new Error('invalid_platform_currency')
    return currency
  }
  private validateCountry (country: string): string {
    const pattern = new RegExp(/^([A-Z]{2,3})$/)
    if (!pattern.test(country)) throw new Error('invalid_platform_country')
    return country
  }
}
