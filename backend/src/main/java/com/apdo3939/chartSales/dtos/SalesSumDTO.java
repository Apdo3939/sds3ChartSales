package com.apdo3939.chartSales.dtos;

import java.io.Serializable;

import com.apdo3939.chartSales.entities.Seller;

public class SalesSumDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String name;
	private Double sum;

	public SalesSumDTO() {

	}

	public SalesSumDTO(Seller seller, Double sum) {

		this.name = seller.getName();
		this.sum = sum;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
}
